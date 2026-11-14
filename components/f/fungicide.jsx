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
		"content": `<style>.a_7kh9bqu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.543 4.209Q1.75 6.89 1.75 11.5q0 .074.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h4.75v6.25q0 2.25 2.25 2.25h1q2.25 0 2.25-2.25v-6.25h6.75q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146q0-4.61-2.793-7.291Q14.895 1.75 11 1.75T4.543 4.209M8.75 18.5v-6.25h2.5v6.25q0 .75-.75.75h-1q-.75 0-.75-.75M18 14q-4 0-4 4t4 4t4-4t-4-4m0 1.5q.72 0 1.232.207l-3.525 3.525Q15.5 18.72 15.5 18q0-2.5 2.5-2.5m0 5q-.72 0-1.232-.207l3.525-3.525q.207.512.207 1.232q0 2.5-2.5 2.5");
}
</style><path class="a_7kh9bqu"/>`,
		"fallback": "uix-solid:fungicide",
	});
}

export default Component;
