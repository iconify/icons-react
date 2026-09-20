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
		"content": `<style>.aaofdybgo {
  d: path("m9 18 3 -3 3 3");
}

.eyzsrubqw {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 10.5h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fozhwebbv {
  d: path("M10 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.goi4-bbmu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 18 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p_-c85acz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 10.5V15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s_vo3wz-j {
  fill: currentColor;
  d: path("M10 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.tl_0od7zv {
  d: path("M6 10.5h12");
}

.ysxlqwpgz {
  d: path("M12 10.5V15");
}
</style><g class="hntgybcog"><path class="s_vo3wz-j"/><path class="eyzsrubqw"/><path class="p_-c85acz"/><path class="goi4-bbmu"/><path class="fozhwebbv"/><path class="tl_0od7zv"/><path class="ysxlqwpgz"/><path class="aaofdybgo"/></g>`,
		"fallback": "iconmind:accessibility-test-duotone-thin",
	});
}

export default Component;
