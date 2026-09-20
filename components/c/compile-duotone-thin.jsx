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
		"content": `<style>.e5d_yrbyo {
  d: path("M12 13h9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l5r0hwbum {
  d: path("m18 10 3 3 -3 3");
}

.p1-4htbpj {
  d: path("m10 4 -6 6 6 6");
}

.z9_55xbmv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 13h9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zrm_gfb1h {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m10 4 -6 6 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zwz5z63qw {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m18 10 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="zrm_gfb1h"/><path class="z9_55xbmv"/><path class="zwz5z63qw"/><path class="p1-4htbpj"/><path class="e5d_yrbyo"/><path class="l5r0hwbum"/></g>`,
		"fallback": "iconmind:compile-duotone-thin",
	});
}

export default Component;
