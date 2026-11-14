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
		"content": `<style>.my7o03kwo {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.759 12.75H2.5q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141Q1.75 12.074 1.75 12t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014h2.259q.13-5.5 2.241-5.5t2.241 5.5h.518q.13-5.5 2.241-5.5t2.241 5.5h.518q.13-5.5 2.241-5.5t2.241 5.5H21.5q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-2.259q-.13 5.5-2.241 5.5t-2.241-5.5h-.518q-.13 5.5-2.241 5.5t-2.241-5.5h-.518q-.13 5.5-2.241 5.5t-2.241-5.5");
}
</style><path class="my7o03kwo"/>`,
		"fallback": "uix-solid:induction-heater",
	});
}

export default Component;
