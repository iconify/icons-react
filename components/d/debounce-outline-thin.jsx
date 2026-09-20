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
		"content": `<style>.e8mk-vdvn {
  d: path("M6 9v6");
}

.h26bvabki {
  d: path("M3 9v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mhila7bcl {
  d: path("M20 7v10");
}

.tuynf1bdi {
  d: path("m15 10 2 2 -2 2");
}

.wskxlyzso {
  d: path("M12 12h3");
}

.y5k8b5bfa {
  d: path("M9 9v6");
}
</style><g class="hntgybcog"><path class="h26bvabki"/><path class="e8mk-vdvn"/><path class="y5k8b5bfa"/><path class="wskxlyzso"/><path class="tuynf1bdi"/><path class="mhila7bcl"/></g>`,
		"fallback": "iconmind:debounce-outline-thin",
	});
}

export default Component;
