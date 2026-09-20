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
		"content": `<style>.eq8p65fcb {
  d: path("M4 4v16h16V4Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n_pijqp-h {
  d: path("M14 16h4");
}

.r7xk8o29f {
  d: path("M12 4v16");
}

.sjot3p-qh {
  d: path("M6 8h4");
}

.sxlwlmkmh {
  d: path("M4 12h16");
}

.xu3q-b_rm {
  fill: currentColor;
  d: path("M4 4v16h16V4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="xu3q-b_rm"/><path class="eq8p65fcb"/><path class="sxlwlmkmh"/><path class="r7xk8o29f"/><path class="sjot3p-qh"/><path class="n_pijqp-h"/></g>`,
		"fallback": "iconmind:crossword-duotone-thin",
	});
}

export default Component;
