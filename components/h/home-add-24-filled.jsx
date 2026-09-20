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
		"content": `<style>.eib21fbhu {
  fill: currentColor;
  d: path("M10.55 2.533a2.25 2.25 0 0 1 2.9 0l6.75 5.695c.508.427.8 1.056.8 1.72v2.074a6.5 6.5 0 0 0-8.976 8.98H4.75A1.75 1.75 0 0 1 3 19.253V9.948c0-.663.292-1.292.8-1.72zM23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0m-5 .5l.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z");
}
</style><path class="eib21fbhu"/>`,
		"fallback": "fluent:home-add-24-filled",
	});
}

export default Component;
