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
		"content": `<style>.e-07m9b9c {
  d: path("M6 11h12");
}

.hvujbjbzr {
  fill: currentColor;
  d: path("M6 20V8h12v12Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.iu91ib-mt {
  d: path("m6 8 3 -3h6l3 3");
}

.pccmg_b3k {
  d: path("M6 20V8h12v12Z");
}

.pw9d8_-zo {
  d: path("M10 5V2h4v3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="hvujbjbzr"/><path class="pccmg_b3k"/><path class="iu91ib-mt"/><path class="e-07m9b9c"/><path class="pw9d8_-zo"/></g>`,
		"fallback": "iconmind:acrylic-duotone-bold",
	});
}

export default Component;
