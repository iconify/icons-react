import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hhdu3bbxs {
  fill: currentColor;
  d: path("M1.5 3a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V3.5a.5.5 0 0 1 .5-.5m9.146.646a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8H4.5a.5.5 0 0 1 0-1h8.793l-2.647-2.646a.5.5 0 0 1 0-.708");
}
</style><path class="hhdu3bbxs"/>`,
		"fallback": "fluent:arrow-export-ltr-16-regular",
	});
}

export default Component;
