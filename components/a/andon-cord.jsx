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
		"content": `<style>.k5clt2b1t {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.5 2.75h19q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-8.75v9.06q1.284.214 2.255 1.185Q16.25 15.74 16.25 17.5t-1.245 3.005T12 21.75t-3.005-1.245T7.75 17.5t1.245-3.005q.971-.971 2.255-1.185V4.25H2.5q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141Q1.75 3.574 1.75 3.5t.014-.146t.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043q.072-.014.146-.014");
}
</style><path class="k5clt2b1t"/>`,
		"fallback": "uix-solid:andon-cord",
	});
}

export default Component;
