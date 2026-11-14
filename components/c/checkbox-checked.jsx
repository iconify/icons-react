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
		"content": `<style>.a6sp2_65u {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.625 3.25h-7.25q-2.123 0-3.624 1.501T3.25 8.375v7.25q0 2.123 1.501 3.624t3.624 1.501h7.25q2.123 0 3.624-1.501t1.501-3.624v-7.25q0-2.123-1.501-3.624T15.625 3.25m-4.887 10.677l4.97-5.195q.051-.054.112-.096q.06-.043.128-.072q.067-.03.139-.046t.146-.018q.074-.001.147.011t.142.04q.068.027.131.066q.062.04.115.091t.096.112t.072.128q.03.067.046.139t.018.146q.001.074-.011.147t-.04.142t-.066.131q-.04.062-.091.115l-5.5 5.75l-.012.012q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094l-3-3q-.106-.105-.163-.243T7 12t.057-.287t.163-.243q.052-.053.113-.094t.13-.069t.141-.043t.146-.014t.146.014q.073.015.141.043t.13.069t.113.094z");
}
</style><path class="a6sp2_65u"/>`,
		"fallback": "uix-solid:checkbox-checked",
	});
}

export default Component;
