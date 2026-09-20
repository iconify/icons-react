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
		"content": `<style>.a1l7fuz9j {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m12 14 -4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.aw-94-b3i {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m12 9 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bydm5bjkj {
  d: path("m12 14 -4 -4");
}

.c3g7d7t3t {
  d: path("m12 14 4 -4");
}

.emvotkb4z {
  d: path("M4 20 20 4");
}

.l4k0b64ql {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m12 14 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r7xk8o29f {
  d: path("M12 4v16");
}

.r9mo7abdq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 9 8 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uw099db1h {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.v4iyegbro {
  d: path("M12 9 8 5");
}

.x5i0m055t {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 20 20 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xhssufbfj {
  d: path("m12 9 4 -4");
}
</style><g class="nrj6p8qat"><path class="uw099db1h"/><path class="r9mo7abdq"/><path class="aw-94-b3i"/><path class="a1l7fuz9j"/><path class="l4k0b64ql"/><path class="x5i0m055t"/><path class="r7xk8o29f"/><path class="v4iyegbro"/><path class="xhssufbfj"/><path class="bydm5bjkj"/><path class="c3g7d7t3t"/><path class="emvotkb4z"/></g>`,
		"fallback": "iconmind:gluten-free-duotone-regular",
	});
}

export default Component;
