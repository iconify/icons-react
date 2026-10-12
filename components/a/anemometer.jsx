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
		"content": `<style>.f1zl3cc-e {
  cx: 12px;
  cy: 8px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s84krac4d {
  d: path("M6.25 8h4m3.5 0h3.75M12 9.75v11.5m-3 0h6M6.25 4.75v6.5a3.25 3.25 0 0 1 0-6.5m14.5 0v6.5a3.25 3.25 0 0 1 0-6.5");
}
</style><g class="hntgybcog"><path class="s84krac4d"/><circle class="f1zl3cc-e"/></g>`,
		"fallback": "iconoven:anemometer",
	});
}

export default Component;
