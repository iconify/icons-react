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
		"content": `<style>.ml0-h9ycb {
  fill: currentColor;
  d: path("M6.923 15.385h6.77v-2.7l3.384 2.7v-6.77l-3.385 2.7v-2.7H6.923zM4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19z");
}
</style><path class="ml0-h9ycb"/>`,
		"fallback": "material-symbols-light:hangout-video",
	});
}

export default Component;
