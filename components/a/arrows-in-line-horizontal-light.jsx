import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uhlrkjijp {
  fill: currentColor;
  d: path("M134 40v176a6 6 0 0 1-12 0V40a6 6 0 0 1 12 0M68.24 91.76a6 6 0 0 0-8.48 8.48L81.51 122H16a6 6 0 0 0 0 12h65.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48ZM240 122h-65.51l21.75-21.76a6 6 0 0 0-8.48-8.48l-32 32a6 6 0 0 0 0 8.48l32 32a6 6 0 0 0 8.48-8.48L174.49 134H240a6 6 0 0 0 0-12");
}
</style><path class="uhlrkjijp"/>`,
		"fallback": "ph:arrows-in-line-horizontal-light",
	});
}

export default Component;
