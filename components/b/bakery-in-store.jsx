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
		"content": `<style>.i6-2__s7h {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7 1.75h10q1.76 0 3.005 1.245T21.25 6v7q0 1.695-1.154 2.912q1.133.409 1.42 1.848l.3 1.5q.232 1.16-.518 2.075t-1.933.915H4.635q-1.183 0-1.933-.915t-.518-2.075l.3-1.5q.287-1.439 1.42-1.848Q2.75 14.695 2.75 13V6q0-1.76 1.245-3.005T7 1.75M6.75 13q0-4.5 5.25-4.5t5.25 4.5q0 .074-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-9q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T6.75 13");
}
</style><path class="i6-2__s7h"/>`,
		"fallback": "uix-solid:bakery-in-store",
	});
}

export default Component;
