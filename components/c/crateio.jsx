import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":192};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r63qlvx5j {
  fill: var(--svg-color--009dc7, #009dc7);
  d: path("M192 64V0h-64v64H0v64h64v64h64v-64h128V64z");
}
</style><path class="r63qlvx5j"/>`,
		"fallback": "logos:crateio",
	});
}

export default Component;
