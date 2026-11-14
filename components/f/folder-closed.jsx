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
		"content": `<style>.mk3unkbhh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 19V6q0-.932.659-1.591T4.5 3.75H9q.149 0 .287.057t.243.163l1.781 1.78H19.5q2.25 0 2.25 2.25v9.5q0 2.25-2.25 2.25H3q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T2.25 19");
}
</style><path class="mk3unkbhh"/>`,
		"fallback": "uix-solid:folder-closed",
	});
}

export default Component;
