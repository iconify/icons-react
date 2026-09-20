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
		"content": `<style>.a7n0rwu5e {
  d: path("M2 18v-5h5V8h5");
}

.buov3xbst {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 18v-5h5V8h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.feojlrbcu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M19 15v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fmh7aab_f {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m12 8 7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hynwb207w {
  d: path("M19 15v3");
}

.rf4kl9b8f {
  d: path("m12 8 7 7");
}

.ritvf8n1n {
  d: path("M2 18h17");
}

.yz2g0nbyn {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 18h17");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="buov3xbst"/><path class="fmh7aab_f"/><path class="yz2g0nbyn"/><path class="feojlrbcu"/><path class="a7n0rwu5e"/><path class="rf4kl9b8f"/><path class="ritvf8n1n"/><path class="hynwb207w"/></g>`,
		"fallback": "iconmind:accessible-duotone-thin",
	});
}

export default Component;
