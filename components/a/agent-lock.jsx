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
		"content": `<style>.cqx-mlnvm {
  d: path("M12.167 21H3.5c-.6 0-1-.4-1-1c0-2.75 2.9-4.5 6.5-4.5c1.181 0 2.288.188 3.241.539M6.5 9a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.pvxb2c99e {
  d: path("M4 11.5V9a5 5 0 0 1 10 0v1.5m-10 1c0 1.25.75 2 2.25 2m8.75 4h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cqx-mlnvm"/><path class="pvxb2c99e"/></g>`,
		"fallback": "uix-sharp:agent-lock",
	});
}

export default Component;
