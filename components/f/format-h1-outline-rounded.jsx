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
		"content": `<style>.r36l7qb4b {
  fill: currentColor;
  d: path("M6.143 16.356Q6 16.213 6 16V8q0-.213.144-.356t.357-.144t.356.144T7 8v3.5h5V8q0-.213.144-.356t.357-.144t.356.144T13 8v8q0 .213-.144.356t-.357.144t-.356-.144T12 16v-3.5H7V16q0 .213-.144.356t-.357.144t-.356-.144m11 0Q17 16.213 17 16V8.5h-1.5q-.213 0-.356-.144T15 7.999t.144-.356t.356-.143h1.683q.357 0 .587.232t.23.576V16q0 .213-.144.356t-.357.144t-.356-.144");
}
</style><path class="r36l7qb4b"/>`,
		"fallback": "material-symbols-light:format-h1-outline-rounded",
	});
}

export default Component;
