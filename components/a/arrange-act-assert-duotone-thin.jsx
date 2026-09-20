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
		"content": `<style>.dx3ubrb9h {
  d: path("M4 7.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2V19a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.f9z-0cczq {
  d: path("M9 10.5h6");
}

.hbtmd5b0k {
  d: path("M9.5 7V2.5h5V7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iw6xucujz {
  fill: currentColor;
  d: path("M4 7.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2V19a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qj5yzibzr {
  d: path("M9 16.5h6");
}

.w0sebyb3m {
  d: path("M9 13.5h6");
}
</style><g class="hntgybcog"><path class="iw6xucujz"/><path class="dx3ubrb9h"/><path class="hbtmd5b0k"/><path class="f9z-0cczq"/><path class="w0sebyb3m"/><path class="qj5yzibzr"/></g>`,
		"fallback": "iconmind:arrange-act-assert-duotone-thin",
	});
}

export default Component;
