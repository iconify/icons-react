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
		"content": `<style>.e0nc-9bpq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.641 14.859Q5.032 16.25 7 16.25h9.949q1.724.227 3.122-.822q1.42-1.065 1.671-2.822t-.814-3.177q-.853-1.139-2.152-1.526q-.011-2.183-1.457-3.919q-1.664-1.996-4.251-2.231T8.484 3.181q-1.743 1.453-2.143 3.61q-1.548.198-2.7 1.35Q2.25 9.532 2.25 11.5t1.391 3.359M5.75 19.5q0-1.75 1.75-1.75t1.75 1.75t-1.75 1.75t-1.75-1.75M12 17.75q-1.75 0-1.75 1.75T12 21.25t1.75-1.75T12 17.75m2.75 1.75q0-1.75 1.75-1.75t1.75 1.75t-1.75 1.75t-1.75-1.75");
}
</style><path class="e0nc-9bpq"/>`,
		"fallback": "uix-solid:cloud-hail",
	});
}

export default Component;
