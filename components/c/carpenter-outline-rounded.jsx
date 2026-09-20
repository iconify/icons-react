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
		"content": `<style>.sgx4b_1zg {
  fill: currentColor;
  d: path("M15.475 21.3q-.275.275-.637.425t-.763.15t-.775-.15t-.65-.425l-1.4-1.4q-.275-.275-.412-.612t-.163-.688t.088-.7t.337-.65l.15-.2L3.1 5.4L7 1.5l12.725 12.725q.275.275.425.638t.15.762t-.15.775t-.425.65zm-2.8-5.675l2.825-2.8l-8.5-8.5l-1.3 1.3zm1.4 4.25L18.3 15.65l-1.4-1.425l-4.25 4.25zm-1.4-4.25l2.825-2.8z");
}
</style><path class="sgx4b_1zg"/>`,
		"fallback": "material-symbols:carpenter-outline-rounded",
	});
}

export default Component;
