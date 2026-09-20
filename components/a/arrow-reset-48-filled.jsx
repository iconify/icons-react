import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.irzc-bhfd {
  fill: currentColor;
  d: path("M13.81 6.81a1.5 1.5 0 0 0-2.12-2.12l-7.5 7.5a1.5 1.5 0 0 0 0 2.12l7.5 7.5a1.5 1.5 0 0 0 2.12-2.12l-4.939-4.94H26.5c7.042 0 12.75 5.708 12.75 12.75S33.542 40.25 26.5 40.25S13.75 34.542 13.75 27.5a1.5 1.5 0 0 0-3 0c0 8.699 7.052 15.75 15.75 15.75s15.75-7.051 15.75-15.75s-7.051-15.75-15.75-15.75H8.871z");
}
</style><path class="irzc-bhfd"/>`,
		"fallback": "fluent:arrow-reset-48-filled",
	});
}

export default Component;
