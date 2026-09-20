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
		"content": `<style>.odhndcueq {
  fill: currentColor;
  d: path("M11.5 13.26h1V7.856h-1zm.934 1.962q.182-.181.182-.433t-.182-.434t-.434-.182t-.434.182t-.182.434t.182.433t.434.182t.434-.182M12 21.377L2.623 12L12 2.623L21.377 12zM12 20l8-8l-8-8l-8 8zm0-8");
}
</style><path class="odhndcueq"/>`,
		"fallback": "material-symbols-light:emergency-home-outline-sharp",
	});
}

export default Component;
