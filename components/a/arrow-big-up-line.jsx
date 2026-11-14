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
		"content": `<style>.u4kdw5bty {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m14.077 4.017l4.039 4.039q.747.745.343 1.72t-1.46.974q-1.249 0-1.249 1.25v1.813q-.001 2.936-2.937 2.937h-1.625q-2.937 0-2.938-2.937V12q0-1.25-1.25-1.25q-1.055.001-1.459-.974t.343-1.721l4.039-4.038q2.077-2.077 4.154 0M15 19.75H9q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h6q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T15 19.75");
}
</style><path class="u4kdw5bty"/>`,
		"fallback": "uix-solid:arrow-big-up-line",
	});
}

export default Component;
