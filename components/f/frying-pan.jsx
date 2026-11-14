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
		"content": `<style>.csq6j3h6o {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.873 6.873Q1.75 8.997 1.75 12t2.123 5.127T9 19.25t5.127-2.123q1.853-1.854 2.089-4.377H21.5q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-5.284q-.236-2.523-2.089-4.377Q12.003 4.75 9 4.75T3.873 6.873");
}
</style><path class="csq6j3h6o"/>`,
		"fallback": "uix-solid:frying-pan",
	});
}

export default Component;
