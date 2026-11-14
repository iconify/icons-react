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
		"content": `<style>.jfwfv2b8d {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.25 1.75H6.75q-1.76 0-3.005 1.245T2.5 6v12q0 1.76 1.245 3.005T6.75 22.25h10.5q1.76 0 3.005-1.245T21.5 18V6q0-1.76-1.245-3.005T17.25 1.75M12.01 17.5q.074 0 .146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014H12q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146t.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043T12 17.5z");
}
</style><path class="jfwfv2b8d"/>`,
		"fallback": "uix-solid:frame-tablet",
	});
}

export default Component;
