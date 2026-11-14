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
		"content": `<style>.bcypcswig {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.5 2.75h-3q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h3q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014m-1.875 2.5h-9.25q-2.123 0-3.624 1.501T2.25 10.375v4.25q0 2.123 1.501 3.624t3.624 1.501h9.25q2.123 0 3.624-1.501t1.501-3.624v-4.25q0-2.123-1.501-3.624T16.625 5.25M6.495 9.495Q7.74 8.25 9.5 8.25t3.005 1.245T13.75 12.5t-1.245 3.005T9.5 16.75t-3.005-1.245T5.25 12.5t1.245-3.005M17 8.75q2.25 0 2.25 2.25q0 .932-.659 1.591T17 13.25h-.5q-.932 0-1.591-.659T14.25 11q0-2.25 2.25-2.25zm-7.5 6.5q-2.75 0-2.75-2.75T9.5 9.75t2.75 2.75t-2.75 2.75");
}
</style><path class="bcypcswig"/>`,
		"fallback": "uix-solid:action-camera",
	});
}

export default Component;
