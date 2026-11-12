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
		"content": `<style>.zidkatfhk {
  fill: currentColor;
  d: path("M16 22H8a5 5 0 0 1-5-5v-4c0-1.317.335-2.748 1.293-3.707l4-4a5.243 5.243 0 0 1 7.414 0l4 4C20.665 10.252 21 11.683 21 13v4a5 5 0 0 1-5 5M9.236 9.832a3 3 0 1 0 5.527 2.335a3 3 0 0 0-5.527-2.335m7.637 10.04a5.003 5.003 0 0 0-9.746 0A3 3 0 0 0 8 20h8a3 3 0 0 0 .873-.128");
}
</style><path class="zidkatfhk"/>`,
		"fallback": "coolicons:house-user-fill-round",
	});
}

export default Component;
