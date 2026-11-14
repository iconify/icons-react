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
		"content": `<style>.xxr40zbvx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.5 3.25h-4q-1.139 0-1.945.805Q1.75 4.861 1.75 6v5q0 2.75 2.75 2.75h2.689l2.781 2.78q.105.106.243.163t.287.057q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146V6q0-2.75-2.75-2.75m11 4q2.75 0 2.75 2.75v5q0 2.75-2.75 2.75h-2.689l-2.781 2.78q-.105.106-.243.163t-.287.057q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T12.75 20V10q0-2.75 2.75-2.75z");
}
</style><path class="xxr40zbvx"/>`,
		"fallback": "uix-solid:cross-examination",
	});
}

export default Component;
