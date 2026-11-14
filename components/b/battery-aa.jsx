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
		"content": `<style>.l6u-o4ulg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12.5 1.75h-1q-1.75 0-1.75 1.75q0 .323.06.586q-.717.311-1.315.909Q7.25 6.24 7.25 8v10q0 1.76 1.245 3.005T11.5 22.25h1q1.76 0 3.005-1.245T16.75 18V8q0-1.76-1.245-3.005q-.598-.598-1.315-.909q.06-.263.06-.586q0-1.75-1.75-1.75m4.25 6.75q0 .074-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043T16 9.25H8q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T7.25 8.5t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043T8 7.75h8q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146");
}
</style><path class="l6u-o4ulg"/>`,
		"fallback": "uix-solid:battery-aa",
	});
}

export default Component;
