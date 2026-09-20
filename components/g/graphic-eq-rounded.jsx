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
		"content": `<style>.fetjy70uk {
  fill: currentColor;
  d: path("M7.75 16.616V7.385q0-.213.144-.357t.357-.144t.356.144t.143.356v9.231q0 .213-.144.357t-.357.143t-.356-.143t-.143-.357M11.5 20.5v-17q0-.213.144-.356T12.001 3t.356.144t.143.356v17q0 .213-.144.356t-.357.144t-.356-.144t-.143-.356M4 12.808v-1.616q0-.212.144-.356t.357-.144t.356.144t.143.356v1.616q0 .212-.144.356t-.357.144t-.356-.144T4 12.808m11.25 3.807v-9.23q0-.213.144-.357t.357-.144t.356.144t.143.356v9.231q0 .213-.144.357t-.357.143t-.356-.143t-.143-.357M19 12.808v-1.616q0-.212.144-.356t.357-.144t.356.144t.143.356v1.616q0 .212-.144.356t-.357.144t-.356-.144t-.143-.356");
}
</style><path class="fetjy70uk"/>`,
		"fallback": "material-symbols-light:graphic-eq-rounded",
	});
}

export default Component;
