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
		"content": `<style>.qj1llbzhz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M21 10.338q1.25.331 1.25 1.912v7.25q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-19q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146v-7.25q0-1.581 1.25-1.912V6.5q0-1.139.805-1.945q.806-.805 1.945-.805h12.5Q21 3.75 21 6.5zm-16.5 0q1.25.331 1.25 1.912v2H7V12.5q0-.11.032-.216l.75-2.5q.042-.142.137-.258q.094-.116.225-.186q.132-.071.28-.086t.292.028q.152.045.272.149l1.279 1.096q1.963-1.401 4.141-.395q2.318 1.069 2.563 4.118h1.279v-2q0-1.581 1.25-1.912V6.5q0-1.25-1.25-1.25H5.75Q4.5 5.25 4.5 6.5zm4 3.912h6.963q-.214-2.078-1.684-2.757q-1.575-.727-3.031.568q-.05.044-.108.079t-.12.06t-.13.037q-.066.012-.133.013q-.068.001-.134-.011q-.067-.011-.13-.034t-.122-.058t-.109-.078l-.875-.749l-.387 1.29z");
}
</style><path class="qj1llbzhz"/>`,
		"fallback": "uix-solid:dog-sofa",
	});
}

export default Component;
