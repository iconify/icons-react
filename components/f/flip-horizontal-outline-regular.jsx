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
		"content": `<style>.dk5jyixqt {
  d: path("m15 5 7 7 -7 7Z");
}

.ffs26fbkv {
  d: path("M12 17v4");
}

.i2-ny_bzf {
  d: path("M12 3v4");
}

.kbnq5bc4a {
  d: path("m9 5 -7 7 7 7Z");
}

.mxzk029nb {
  d: path("M12 10v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="kbnq5bc4a"/><path class="dk5jyixqt"/><path class="i2-ny_bzf"/><path class="mxzk029nb"/><path class="ffs26fbkv"/></g>`,
		"fallback": "iconmind:flip-horizontal-outline-regular",
	});
}

export default Component;
