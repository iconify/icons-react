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
		"content": `<style>.eaiz9l2rt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.393 42.231c-9.484 5.927-21.929 3.592-28.62-5.368S1.377 15.307 9.753 7.897s21.035-7.161 29.113.572c8.08 7.733 8.88 20.368 1.841 29.06");
}

.hnj0-bkzp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.258 21.675l8.136-9.878h8.135l-8.717 11.621m0 0l10.734 14.31M22.258 25.161l13.318 16.957M22.258 21.675l-.017-9.911l-7.503.066l-.067 24.37h7.37l.217-11.04");
}
</style><path class="eaiz9l2rt"/><path class="hnj0-bkzp"/>`,
		"fallback": "arcticons:circle-k",
	});
}

export default Component;
