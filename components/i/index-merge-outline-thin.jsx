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
		"content": `<style>.cabegubdh {
  d: path("M14 5h7");
}

.g3lrzsbos {
  d: path("M3 5h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p0hi_9aen {
  d: path("M5 17h14");
}

.ub1mcfbjy {
  d: path("M14 9h7");
}

.xpjur0b_h {
  d: path("M12 11.5V14");
}

.z_7v15bik {
  d: path("M3 9h7");
}
</style><g class="hntgybcog"><path class="g3lrzsbos"/><path class="z_7v15bik"/><path class="cabegubdh"/><path class="ub1mcfbjy"/><path class="xpjur0b_h"/><path class="p0hi_9aen"/></g>`,
		"fallback": "iconmind:index-merge-outline-thin",
	});
}

export default Component;
