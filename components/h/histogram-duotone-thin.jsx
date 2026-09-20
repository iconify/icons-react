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

.f1t8iyb4a {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16 9v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gkowgccsl {
  d: path("M20 14v6");
}

.h7eeppe6g {
  d: path("M16 9v11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hsnj9o-9y {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 20h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jkuojibnm {
  d: path("M3 20h18");
}

.nl-hnlp7a {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 12v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p8-4n3b5e {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 7v13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p86p59b-c {
  d: path("M8 7v13");
}

.r7xk8o29f {
  d: path("M12 4v16");
}

.wj8ybccjk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y_lfs3-op {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M20 14v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="nl-hnlp7a"/><path class="p8-4n3b5e"/><path class="wj8ybccjk"/><path class="f1t8iyb4a"/><path class="y_lfs3-op"/><path class="hsnj9o-9y"/><path class="dp6dvchmk"/><path class="p86p59b-c"/><path class="r7xk8o29f"/><path class="h7eeppe6g"/><path class="gkowgccsl"/><path class="jkuojibnm"/></g>`,
		"fallback": "iconmind:histogram-duotone-thin",
	});
}

export default Component;
