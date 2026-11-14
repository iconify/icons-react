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
		"content": `<style>.wa959xb_z {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.25 2.5v1.261q3 .182 3 3.364V12h-7.5V7.125q0-3.182 3-3.364V2.5q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043q.072-.014.146-.014t.146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146m-4.5 11v4.875q0 3.375 3.375 3.375h.75q3.375 0 3.375-3.375V13.5zm9 0v4.875q0 3.375 3.375 3.375h.75q3.375 0 3.375-3.375V13.5zm7.5-1.5V7.125q0-3.182-3-3.364V2.5q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014t-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146v1.261q-3 .182-3 3.364V12z");
}
</style><path class="wa959xb_z"/>`,
		"fallback": "uix-solid:battery-pack-aa",
	});
}

export default Component;
