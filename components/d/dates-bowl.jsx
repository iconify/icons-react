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
		"content": `<style>.w62_n0bhv {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.25 8.25q0-5 2.75-5t2.75 5q0 2.261-.563 3.5h1.834q-.271-.915-.271-2.25q0-4.25 2.75-4.25t2.75 4.25q0 1.335-.271 2.25h.521q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146q0 3.714-2.977 6.03q-2.855 2.22-7.273 2.22t-7.273-2.22Q1.75 16.214 1.75 12.5q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014h.521q-.271-.915-.271-2.25q0-4.25 2.75-4.25T8.25 9.5q0 1.335-.271 2.25h1.834q-.563-1.239-.563-3.5");
}
</style><path class="w62_n0bhv"/>`,
		"fallback": "uix-solid:dates-bowl",
	});
}

export default Component;
