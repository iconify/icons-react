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
		"content": `<style>.nr9_9zg5r {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m18.28 2.72l2.75 2.75q.106.105.163.243T21.25 6t-.057.287t-.163.243l-2.75 2.75q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.106-.105-.163-.243T17 8.75t.057-.287t.163-.243l1.469-1.47H17q-1.687 0-3.28 5.46q-1.907 6.54-4.72 6.54h-.81q-.345 2-2.69 2q-2.75 0-2.75-2.75t2.75-2.75q2.345 0 2.69 2H9q1.688 0 3.28-5.46Q14.187 5.25 17 5.25h1.689L17.22 3.78q-.106-.105-.163-.243T17 3.25t.057-.287t.163-.243q.052-.053.113-.094t.13-.069t.141-.043t.146-.014q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094");
}
</style><path class="nr9_9zg5r"/>`,
		"fallback": "uix-solid:http-redirect",
	});
}

export default Component;
