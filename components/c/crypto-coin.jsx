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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iwkkrqbym {
  d: path("m12.65 6.38l3.9 2.25q.65.37.65 1.12v4.5q0 .75-.65 1.13l-3.9 2.25q-.65.37-1.3 0l-3.9-2.25Q6.8 15 6.8 14.25v-4.5q0-.75.65-1.12l3.9-2.25q.65-.38 1.3 0M12 12V6.75M12 12l4.55 2.63M12 12l-4.55 2.63");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="iwkkrqbym"/></g>`,
		"fallback": "iconoven:crypto-coin",
	});
}

export default Component;
