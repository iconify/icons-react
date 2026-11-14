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
		"content": `<style>.kxlzdzbxc {
  d: path("M13.575 13.633q.175-.553.175-1.133q0-.184-.018-.368q-.018-.183-.054-.364q-.036-.18-.089-.357q-.054-.176-.124-.346t-.158-.333t-.189-.315q-.102-.154-.219-.296t-.247-.273t-.273-.247t-.296-.219t-.315-.189q-.163-.087-.333-.158q-.17-.07-.346-.124q-.177-.053-.357-.089q-.181-.036-.364-.054q-.184-.018-.368-.018t-.368.018t-.364.054t-.357.089t-.346.124t-.333.158t-.315.189q-.154.102-.296.219t-.273.247t-.247.273t-.219.296t-.189.315q-.087.163-.158.333q-.07.17-.124.346q-.053.177-.089.357q-.036.181-.054.364q-.018.184-.018.368t.018.368t.054.364t.089.357q.054.176.124.346t.158.333t.189.315q.102.154.219.296t.247.273q.131.13.273.247t.296.219t.315.189q.163.087.333.158q.17.07.346.124q.177.053.357.089q.181.036.364.054q.184.018.368.018q.395 0 .782-.082q.386-.083.747-.244t.681-.394t.583-.527M18 14.75v6.5m2.815-4.875l-5.63 3.25m5.63 0l-5.63-3.25");
}

.ovtq83zgo {
  d: path("M12.5 20.5h-10v-18h16v9.4M2.5 6h16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ovtq83zgo"/><path class="kxlzdzbxc"/></g>`,
		"fallback": "uix-sharp:cold-wash-dial",
	});
}

export default Component;
