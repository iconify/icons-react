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
		"content": `<style>.ik1mmvb6k {
  fill: currentColor;
  d: path("M3.5 21q-.214 0-.357-.144T3 20.5v-17q0-.213.144-.356T3.501 3t.356.144T4 3.5v17q0 .213-.144.356T3.499 21m7.794-4.792Q11 15.917 11 15.5v-7q0-.417.291-.708q.291-.292.707-.292t.709.292T13 8.5v7q0 .417-.291.708q-.291.292-.707.292t-.709-.292m8.85 4.648Q20 20.713 20 20.5v-17q0-.213.144-.356T20.501 3t.356.144T21 3.5v17q0 .213-.144.356t-.357.144t-.356-.144");
}
</style><path class="ik1mmvb6k"/>`,
		"fallback": "material-symbols-light:horizontal-distribute-rounded",
	});
}

export default Component;
