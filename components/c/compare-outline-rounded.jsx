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
		"content": `<style>.v9bopyboq {
  fill: currentColor;
  d: path("M11 20H5.616q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4H11V2.27q0-.214.143-.358t.357-.143t.357.144t.143.356v19.462q0 .213-.143.356t-.357.144t-.357-.144t-.143-.356zm-6-2h6v-7.192zm9 2v-8l5 6V5.616q0-.231-.192-.424T18.384 5H14V4h4.385q.69 0 1.152.463T20 5.616v12.769q0 .69-.463 1.153T18.385 20z");
}
</style><path class="v9bopyboq"/>`,
		"fallback": "material-symbols-light:compare-outline-rounded",
	});
}

export default Component;
