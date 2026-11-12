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
		"content": `<style>.eko_bpbha {
  d: path("M12 12V20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lbdj6gbfo {
  d: path("M5.07178 16L18.9282 8");
}

.qenlhtbdl {
  d: path("M12 4V8");
}

.wt-palohp {
  d: path("M5.07178 8L18.9282 16");
}
</style><g class="hntgybcog"><path class="qenlhtbdl"/><path class="eko_bpbha"/><path class="wt-palohp"/><path class="lbdj6gbfo"/></g>`,
		"fallback": "solar:asterisk-broken",
	});
}

export default Component;
