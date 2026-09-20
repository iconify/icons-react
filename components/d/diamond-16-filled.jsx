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
		"content": `<style>.kjlpoacyy {
  fill: currentColor;
  d: path("M6.232 1.233a2.5 2.5 0 0 1 3.535 0l5 4.999a2.5 2.5 0 0 1 0 3.535l-5 5a2.5 2.5 0 0 1-3.535 0l-5-5a2.5 2.5 0 0 1 0-3.535z");
}
</style><path class="kjlpoacyy"/>`,
		"fallback": "fluent:diamond-16-filled",
	});
}

export default Component;
