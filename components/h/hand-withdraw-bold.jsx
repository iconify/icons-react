import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wcffnfrom {
  fill: currentColor;
  d: path("M236 198.65V240a12 12 0 0 1-24 0v-41.35A70.66 70.66 0 0 0 196 154v48.27a12 12 0 0 1-22 6.57l-10.67-16.3a7 7 0 0 1-.36-.58a8 8 0 0 0-14 7.77l22 33.66a12 12 0 1 1-20.08 13.14l-22.26-34c-.12-.19-.24-.38-.35-.58A32 32 0 0 1 172 168.3V68h-8a12 12 0 0 1 0-24h12a20 20 0 0 1 20 20v57.52a94.91 94.91 0 0 1 40 77.13M88 56a12 12 0 0 0-12-12H64a20 20 0 0 0-20 20v136a12 12 0 0 0 24 0V68h8a12 12 0 0 0 12-12m68.49 60.48a12 12 0 0 0-17-17L132 107V16a12 12 0 0 0-24 0v91l-7.51-7.52a12 12 0 0 0-17 17l28 28a12 12 0 0 0 17 0Z");
}
</style><path class="wcffnfrom"/>`,
		"fallback": "ph:hand-withdraw-bold",
	});
}

export default Component;
