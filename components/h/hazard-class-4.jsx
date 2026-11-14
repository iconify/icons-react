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
		"content": `<style>.i5hceoo2e {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m19.805 8.995l-4.8-4.8Q13.761 2.95 12 2.95T8.995 4.195l-4.8 4.8Q2.95 10.239 2.95 12t1.245 3.005l4.8 4.8Q10.239 21.05 12 21.05t3.005-1.245l4.8-4.8Q21.05 13.761 21.05 12t-1.245-3.005m-7.134-3.08q.417.835 1.516 2.163q2.063 2.496 2.063 4.672q0 1.76-1.245 3.005T12 17t-3.005-1.245T7.75 12.75q0-2.311 1.97-4.28q.105-.106.243-.163t.287-.057q.227 0 .416.126q.088-1.609.71-2.542q.041-.061.093-.114q.052-.052.114-.093q.061-.041.129-.07q.068-.028.141-.042t.146-.015t.147.014q.072.015.14.043t.13.069q.166.11.255.289");
}
</style><path class="i5hceoo2e"/>`,
		"fallback": "uix-solid:hazard-class-4",
	});
}

export default Component;
