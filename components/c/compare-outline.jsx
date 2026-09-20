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
		"content": `<style>.fd1iwracu {
  fill: currentColor;
  d: path("M11 22.23V20H5.616q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4H11V1.77h1v20.46zM5 18h6v-7.192zm9 2v-8l5 6V5.616q0-.231-.192-.424T18.384 5H14V4h4.385q.69 0 1.152.463T20 5.616v12.769q0 .69-.463 1.153T18.385 20z");
}
</style><path class="fd1iwracu"/>`,
		"fallback": "material-symbols-light:compare-outline",
	});
}

export default Component;
