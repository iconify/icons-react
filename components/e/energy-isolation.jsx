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
		"content": `<style>.gd30-1kid {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m15.47 7.97l-6.011 6.01q-.489-.23-1.209-.23q-1.837 0-2.174 1.5H2.5q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141q-.014.072-.014.146t.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h3.576q.337 1.5 2.174 1.5q2.25 0 2.25-2.25q0-.47-.098-.841L16.53 9.03q.106-.105.163-.243t.057-.287t-.057-.287t-.163-.243q-.052-.053-.113-.094t-.13-.069t-.141-.043T16 7.75q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094M13.5 16q0-2.25 2.25-2.25q1.837 0 2.174 1.5H21.5q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-3.576q-.337 1.5-2.174 1.5q-2.25 0-2.25-2.25");
}
</style><path class="gd30-1kid"/>`,
		"fallback": "uix-solid:energy-isolation",
	});
}

export default Component;
