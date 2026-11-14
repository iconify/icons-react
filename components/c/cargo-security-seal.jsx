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
		"content": `<style>.tekx51bbh {
  d: path("M8.25 3v8h4V3M15 17.5h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vqm5j-f6m {
  d: path("M12.2 18H2.5V3H18v9.2M2.5 8H18");
}
</style><g class="ulnmmdpxh"><path class="vqm5j-f6m"/><path class="tekx51bbh"/></g>`,
		"fallback": "uix-sharp:cargo-security-seal",
	});
}

export default Component;
