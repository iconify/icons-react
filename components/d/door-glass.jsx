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
		"content": `<style>.pvh9yfbms {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.125 1.75h7.75q3.375 0 3.375 3.375v13.75q0 3.375-3.375 3.375h-7.75q-3.375 0-3.375-3.375V5.125q0-3.375 3.375-3.375m5.625 3h-3.5q-2.5 0-2.5 2.5v2.5q0 2.5 2.5 2.5h3.5q1.036 0 1.768-.732t.732-1.768v-2.5q0-1.036-.732-1.768T13.75 4.75M16.25 17v-2.5q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014t-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146V17q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146");
}
</style><path class="pvh9yfbms"/>`,
		"fallback": "uix-solid:door-glass",
	});
}

export default Component;
