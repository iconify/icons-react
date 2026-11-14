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
		"content": `<style>.alefecbde {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M21.75 11q0-3.407-5.015-4.37Q16.482 3.625 12 3.625T7.265 6.63Q2.25 7.593 2.25 11v6q0 2.75 2.75 2.75h14q2.75 0 2.75-2.75zm0 1.5q0 .074-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014H3q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141q-.014-.072-.014-.146t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043T3 11.75h18q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146M12 6.25q-1.728 0-3.15.149q.471-1.274 3.15-1.274t3.15 1.274Q13.728 6.25 12 6.25");
}
</style><path class="alefecbde"/>`,
		"fallback": "uix-solid:duffel-bag",
	});
}

export default Component;
