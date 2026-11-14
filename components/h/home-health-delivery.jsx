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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.trn1rwa5g {
  d: path("M15.5 17v4.5h5V17");
}

.zbovfvbez {
  d: path("M11.611 19H5.125q-.129 0-.257-.013q-.129-.012-.255-.037q-.127-.026-.25-.063T4.12 18.8q-.119-.049-.232-.11t-.221-.132t-.207-.154t-.191-.173q-.091-.091-.173-.191q-.082-.099-.154-.207q-.071-.107-.132-.221q-.061-.113-.11-.232q-.05-.12-.087-.243t-.063-.25q-.025-.126-.037-.255q-.013-.128-.013-.257v-7.75q0-.129.013-.257q.012-.129.037-.255q.026-.127.063-.25T2.7 7.62q.049-.119.11-.232t.132-.221t.154-.207t.173-.191t.191-.173q.099-.082.207-.154q.107-.071.221-.132q.113-.061.232-.11q.12-.05.243-.087t.25-.063t.255-.037Q4.996 6 5.125 6h9.75q.129 0 .257.013q.129.012.255.037q.127.026.25.063t.243.087t.232.11q.114.061.221.132q.108.072.207.154q.1.082.191.173t.173.191t.154.207t.132.221t.11.232q.05.12.087.243t.063.25q.025.126.037.255q.013.128.013.257v3.132M10 6v5M2.5 9.5h15M14.25 18L18 14.5l3.75 3.5");
}
</style><g class="hntgybcog"><path class="zbovfvbez"/><path class="trn1rwa5g"/></g>`,
		"fallback": "uix:home-health-delivery",
	});
}

export default Component;
