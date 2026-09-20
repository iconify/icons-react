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
		"content": `<style>.n0fhqqbzc {
  fill: currentColor;
  d: path("M176 76a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48m-48 24a24 24 0 1 1 24-24a24 24 0 0 1-24 24m60 24a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24M68 124a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24");
}
</style><path class="n0fhqqbzc"/>`,
		"fallback": "ph:circles-three-bold",
	});
}

export default Component;
