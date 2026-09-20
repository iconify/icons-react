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
		"content": `<style>.lxo8x4-rg {
  fill: currentColor;
  d: path("M3 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm3 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}
</style><path class="lxo8x4-rg"/>`,
		"fallback": "fluent:door-16-filled",
	});
}

export default Component;
