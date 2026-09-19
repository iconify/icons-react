import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d2r3264na {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4Z");
}

.jkj5crzzs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 30.5h37m0 4h-37");
}

.m_4brrtfn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.356 15.056v5.864a2.904 2.904 0 0 0 5.808 0v-5.864M13.59 19.424h5.808m0-4.368v8.768m-5.808-8.768v8.768m17.535-8.768v6.96a3.83 3.83 0 0 1-1.686 3.177m4.973-10.137v8.768");
}
</style><path class="m_4brrtfn"/><path class="d2r3264na"/><path class="jkj5crzzs"/>`,
		"fallback": "arcticons:huji",
	});
}

export default Component;
