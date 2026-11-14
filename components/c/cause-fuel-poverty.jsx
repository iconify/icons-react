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
		"content": `<style>.vwz5li_xd {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.935 9.143Q2.75 10.154 2.75 11.711v6.164q0 3.375 3.375 3.375h11.75q3.375 0 3.375-3.375v-6.164q0-1.557-1.185-2.568L14.19 4.132q-2.19-1.866-4.38 0zm8.567-.2q3.248 2.923 3.248 5.557q0 3.75-3.75 3.75T8.25 14.5q0-2.634 3.248-5.557q.051-.047.11-.083t.123-.06t.132-.037T12 8.75t.137.013t.132.037t.123.06t.11.083");
}
</style><path class="vwz5li_xd"/>`,
		"fallback": "uix-solid:cause-fuel-poverty",
	});
}

export default Component;
