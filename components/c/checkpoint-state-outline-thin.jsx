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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.opnv9et8e {
  d: path("M10 14.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.sfjortb-o {
  d: path("M12 7v5");
}

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}
</style><g class="hntgybcog"><path class="ugdbidcqi"/><path class="sfjortb-o"/><path class="opnv9et8e"/></g>`,
		"fallback": "iconmind:checkpoint-state-outline-thin",
	});
}

export default Component;
