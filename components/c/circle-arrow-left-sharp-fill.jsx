import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qcew92bzy {
  fill: currentColor;
  d: path("M12 1C17.937 1 23 6.0629 23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1ZM11.4984 6.9894L7.0889 11.2836C6.6859 11.6762 6.6859 12.3238 7.0889 12.7164L11.4983 17.0112L12.8938 15.5776L10.2471 13L17 13L17 11L10.2471 11L12.8939 8.423L11.4984 6.9894Z");
}
</style><path class="qcew92bzy"/>`,
		"fallback": "keyline-icons:circle-arrow-left-sharp-fill",
	});
}

export default Component;
