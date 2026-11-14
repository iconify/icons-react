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
		"content": `<style>.zocwxfpnn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.25 5.5q0-2.75 2.75-2.75t2.75 2.75T17 8.25T14.25 5.5m-7.321 5.421l-3.413 5.513q-.773 1.249-.058 2.533t2.184 1.283H18q1.545 0 2.236-1.382T20 16.25l-2.61-3.48q-.708-.943-1.886-.929q-1.179.014-1.865.973q-.223.314-.609.308q-.385-.006-.599-.327l-1.296-1.945q-.757-1.136-2.122-1.113t-2.084 1.184");
}
</style><path class="zocwxfpnn"/>`,
		"fallback": "uix-solid:company-retreat",
	});
}

export default Component;
