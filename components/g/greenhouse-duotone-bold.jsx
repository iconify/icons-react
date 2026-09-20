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
		"content": `<style>.ckwdk7nmy {
  d: path("M4 20v-8l8 -8 8 8v8Z");
}

.evjfijbqj {
  fill: currentColor;
  d: path("M4 20v-8l8 -8 8 8v8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ioeb-3q9w {
  d: path("M16 13v7");
}

.pp1tvkbjf {
  d: path("M8 13v7");
}

.r7xk8o29f {
  d: path("M12 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="evjfijbqj"/><path class="ckwdk7nmy"/><path class="r7xk8o29f"/><path class="pp1tvkbjf"/><path class="ioeb-3q9w"/></g>`,
		"fallback": "iconmind:greenhouse-duotone-bold",
	});
}

export default Component;
