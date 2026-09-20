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
		"content": `<style>.fpzo7r8ab {
  fill: currentColor;
  d: path("M10.185 20Q7.6 20 5.8 18.2T4 13.816q0-1.178.452-2.311t1.367-2.05l3.675-3.674q.916-.916 2.04-1.358t2.32-.442q2.565 0 4.365 1.8t1.8 4.365q0 1.196-.442 2.32t-1.358 2.04l-3.675 3.675q-.915.915-2.049 1.367t-2.31.452");
}
</style><path class="fpzo7r8ab"/>`,
		"fallback": "material-symbols-light:eraser-size-5-outline-rounded",
	});
}

export default Component;
