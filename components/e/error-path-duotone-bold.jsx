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
		"content": `<style>.akm88w1ho {
  d: path("M2 8h7l4 4h9");
}

.c05571vet {
  d: path("m16 15 4 4");
}

.hz31h062l {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 8h7l4 4h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.puhwuz9ig {
  d: path("m20 15 -4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v_3erbqcl {
  d: path("m9 8 4 -4h9");
}

.v1lpksb8n {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m20 15 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xiouf5t6o {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 8 4 -4h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y5h-cjygw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m16 15 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="hz31h062l"/><path class="xiouf5t6o"/><path class="y5h-cjygw"/><path class="v1lpksb8n"/><path class="akm88w1ho"/><path class="v_3erbqcl"/><path class="c05571vet"/><path class="puhwuz9ig"/></g>`,
		"fallback": "iconmind:error-path-duotone-bold",
	});
}

export default Component;
