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
		"content": `<style>.nreaevs2v {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q0-4.246 3.002-7.248T12 1.75t7.248 3.002T22.25 12t-3.002 7.248T12 22.25t-7.248-3.002T1.75 12m5.629 1.806q-.403 1.297.558 2.257q.96.961 2.257.558l2.155-.669q1.213-.376 1.517-1.609q.305-1.232-.593-2.13l-1.486-1.486q-.898-.898-2.13-.593q-1.233.304-1.609 1.517z");
}
</style><path class="nreaevs2v"/>`,
		"fallback": "uix-solid:compass-needle",
	});
}

export default Component;
