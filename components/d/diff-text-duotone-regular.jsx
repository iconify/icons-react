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
		"content": `<style>.cpjs7jb_n {
  d: path("M8.5 6H21");
}

.fkhwqab8s {
  d: path("M8.5 18H21");
}

.jx5-n36vx {
  d: path("M2.5 6h3");
}

.kd_vburjj {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8.5 18H21");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kstinqbxy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8.5 6H21");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kyedmeb5o {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2.5 6h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n662qsbvn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 4.5v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qh_rgccdd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8.5 12H21");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qyfk67htz {
  d: path("M4 4.5v3");
}

.risyu_bcj {
  d: path("M2.5 12h3");
}

.v1-ix-gqp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2.5 12h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wvtsuii2m {
  d: path("M8.5 12H21");
}
</style><g class="nrj6p8qat"><path class="kyedmeb5o"/><path class="n662qsbvn"/><path class="v1-ix-gqp"/><path class="kstinqbxy"/><path class="qh_rgccdd"/><path class="kd_vburjj"/><path class="jx5-n36vx"/><path class="qyfk67htz"/><path class="risyu_bcj"/><path class="cpjs7jb_n"/><path class="wvtsuii2m"/><path class="fkhwqab8s"/></g>`,
		"fallback": "iconmind:diff-text-duotone-regular",
	});
}

export default Component;
