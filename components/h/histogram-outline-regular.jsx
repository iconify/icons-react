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
		"content": `<style>.dp6dvchmk {
  d: path("M4 12v8");
}

.gkowgccsl {
  d: path("M20 14v6");
}

.h7eeppe6g {
  d: path("M16 9v11");
}

.jkuojibnm {
  d: path("M3 20h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p86p59b-c {
  d: path("M8 7v13");
}

.r7xk8o29f {
  d: path("M12 4v16");
}
</style><g class="nrj6p8qat"><path class="dp6dvchmk"/><path class="p86p59b-c"/><path class="r7xk8o29f"/><path class="h7eeppe6g"/><path class="gkowgccsl"/><path class="jkuojibnm"/></g>`,
		"fallback": "iconmind:histogram-outline-regular",
	});
}

export default Component;
