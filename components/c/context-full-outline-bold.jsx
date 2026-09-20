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
		"content": `<style>.b4x_isbqv {
  d: path("M8 6H5v12h3");
}

.coi-np7dk {
  d: path("M15 9v6");
}

.d_6ujebpi {
  d: path("M16 6h3v12h-3");
}

.l517yxbln {
  d: path("M12 9v6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y5k8b5bfa {
  d: path("M9 9v6");
}
</style><g class="s0phu2bbs"><path class="b4x_isbqv"/><path class="d_6ujebpi"/><path class="y5k8b5bfa"/><path class="l517yxbln"/><path class="coi-np7dk"/></g>`,
		"fallback": "iconmind:context-full-outline-bold",
	});
}

export default Component;
