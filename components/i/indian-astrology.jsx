import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lpgfwfk9r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 31.224l5.044-7.766l-4.12-7.224l8.666-2.564l2.664-8.849l7.779 4.262L31.28 5.11l3.02 8.416l9.2 3.214l-4.369 7.405l3.836 7.26l-8.524 2.636l-2.948 8.849l-7.104-4.226l-7.495 4.515l-2.7-9.066z");
}

.v6b0c_moi {
  cx: 24.229px;
  cy: 23.645px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 12.853px;
  ry: 13.07px;
}
</style><path class="lpgfwfk9r"/><ellipse class="v6b0c_moi"/>`,
		"fallback": "arcticons:indian-astrology",
	});
}

export default Component;
