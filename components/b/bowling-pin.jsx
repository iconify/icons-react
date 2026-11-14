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
		"content": `<style>.rf0z3pb6k {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.119 21.906q.051.079.12.143t.152.109t.174.069t.185.023h4.5q.094 0 .185-.023q.092-.024.174-.069q.083-.045.152-.109t.12-.143q4.062-6.319-.283-11.859q-.089-.133.269-.911q.883-1.923.883-3.636q0-3.75-3.75-3.75T8.25 5.5q0 1.713.883 3.636q.358.778.269.911q-4.345 5.54-.283 11.859M14 9.75q.074 0 .146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-4q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043T10 9.75z");
}
</style><path class="rf0z3pb6k"/>`,
		"fallback": "uix-solid:bowling-pin",
	});
}

export default Component;
