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
		"content": `<style>.kcsqt3nfk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m4.334 6.948l1.508 3.319q-.216.046-.372.203l-3 3q-.106.105-.163.243T2.25 14v2.5q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h1.256q-.006.122-.006.25q0 2.75 2.75 2.75t2.75-2.75q0-.128-.006-.25h4.512q-.006.122-.006.25q0 2.75 2.75 2.75t2.75-2.75q0-.128-.006-.25H21q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146v-1.75q0-2-2.25-2h-2.76l-3.304-2.36q-.196-.14-.436-.14h-2.537q.084-.571-.27-1.128l-2.118-3.33Q7.412 4.751 6.177 4.75H5.75q-.848 0-1.307.713q-.46.713-.109 1.485");
}
</style><path class="kcsqt3nfk"/>`,
		"fallback": "uix-solid:flying-car",
	});
}

export default Component;
