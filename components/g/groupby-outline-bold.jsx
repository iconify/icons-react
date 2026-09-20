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
		"content": `<style>.eu9kkgbdm {
  d: path("M9 12h12");
}

.r4nj1cczx {
  d: path("M6 4H3v16h3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sxy07wbdf {
  d: path("M9 7h12");
}

.x3jqftbaj {
  d: path("M9 17h12");
}
</style><g class="s0phu2bbs"><path class="r4nj1cczx"/><path class="sxy07wbdf"/><path class="eu9kkgbdm"/><path class="x3jqftbaj"/></g>`,
		"fallback": "iconmind:groupby-outline-bold",
	});
}

export default Component;
