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
		"content": `<style>.arq593bkp {
  d: path("m9 9 6 6");
}

.mgbos9zve {
  d: path("m15 9 -6 6");
}

.o40l0bbgl {
  d: path("M9 8.5h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}

.zpdz8rbaf {
  d: path("M9 15.5h6");
}
</style><g class="s0phu2bbs"><path class="ugdbidcqi"/><path class="o40l0bbgl"/><path class="arq593bkp"/><path class="mgbos9zve"/><path class="zpdz8rbaf"/></g>`,
		"fallback": "iconmind:agent-timeout-outline-bold",
	});
}

export default Component;
