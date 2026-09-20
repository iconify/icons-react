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
		"content": `<style>.vhyaqjb0n {
  fill: currentColor;
  d: path("M170 76a42 42 0 1 0-42 42a42 42 0 0 0 42-42m-42 30a30 30 0 1 1 30-30a30 30 0 0 1-30 30m60 24a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 72a30 30 0 1 1 30-30a30 30 0 0 1-30 30M68 130a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 72a30 30 0 1 1 30-30a30 30 0 0 1-30 30");
}
</style><path class="vhyaqjb0n"/>`,
		"fallback": "ph:circles-three-light",
	});
}

export default Component;
