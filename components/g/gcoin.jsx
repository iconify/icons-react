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
		"content": `<style>.p43uz3pyv {
  fill: var(--svg-color--fff, #fff);
  d: path("M18.171 7.593v5.487l-5.142 5.05v1.867L12 21l-1.054-1.029v-1.866L5.829 13.08V5.057h5.142V3h2.058v2.057h4.145L14.7 7.63H8.4v4.448l2.571 2.623V9.686h2.058v5.009l2.571-2.623v-2.057z");
}
</style><path class="p43uz3pyv"/>`,
		"fallback": "token-branded:gcoin",
	});
}

export default Component;
