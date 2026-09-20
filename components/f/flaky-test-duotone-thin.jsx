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
		"content": `<style>.e4btx4zel {
  d: path("m21 15 -6 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jje0epbum {
  d: path("m3 7 3 3 5 -5");
}

.kfdmhd64i {
  d: path("m15 15 6 6");
}

.r_68xabcj {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m21 15 -6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vygtdmb5w {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 7 3 3 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zl5hlnbpt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m15 15 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="vygtdmb5w"/><path class="zl5hlnbpt"/><path class="r_68xabcj"/><path class="jje0epbum"/><path class="kfdmhd64i"/><path class="e4btx4zel"/></g>`,
		"fallback": "iconmind:flaky-test-duotone-thin",
	});
}

export default Component;
