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
		"content": `<style>.w909y7i3f {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.5 2.75h13q1.346 0 2.298.952T21.75 6t-.952 2.298q-.259.26-.548.448V18.5q0 2.75-2.75 2.75h-11q-2.75 0-2.75-2.75V8.916Q2.25 8.208 2.25 6q0-1.346.952-2.298T5.5 2.75m-.25 6.495V18.5q0 1.25 1.25 1.25h11q1.25 0 1.25-1.25V9.242q-.123.008-.25.008h-13q-.128 0-.25-.005M11 15.439L9.03 13.47q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014t-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.106.105-.163.243T7.75 14t.057.287t.163.243l2.5 2.5q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094l4.5-4.5q.106-.105.163-.243T16.25 12t-.057-.287t-.163-.243q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014t-.146.014q-.073.015-.141.043t-.13.069t-.113.094z");
}
</style><path class="w909y7i3f"/>`,
		"fallback": "uix-solid:deliverable",
	});
}

export default Component;
