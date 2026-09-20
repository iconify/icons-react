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
		"content": `<style>.yawaslb1j {
  fill: currentColor;
  d: path("M11.5 13.173h1v-5.23h-1zm.934 2.049q.182-.181.182-.433t-.182-.434t-.434-.182t-.434.182t-.182.433t.182.434t.434.182t.434-.182M12 21.377L2.623 12L12 2.623L21.377 12z");
}
</style><path class="yawaslb1j"/>`,
		"fallback": "material-symbols-light:emergency-home-sharp",
	});
}

export default Component;
