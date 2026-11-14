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
		"content": `<style>.wehgqj9el {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.983 8.346Q2.75 9.07 2.75 10.5v8.249q0 2.5 2.5 2.5H9q-2.25 0-2.25-2.25v-5.5q0-2.25 2.25-2.25h6q2.25 0 2.25 2.25V19q0 2.25-2.25 2.25h3.75q2.5 0 2.5-2.5v-8.249q0-1.43-1.233-2.154l-6.75-3.972Q12 3.63 10.733 4.376z");
}
</style><path class="wehgqj9el"/>`,
		"fallback": "uix-solid:data-warehouse",
	});
}

export default Component;
