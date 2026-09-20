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
		"content": `<style>.sv1k_wbgh {
  fill: currentColor;
  d: path("M204.37 51.59A108 108 0 1 0 236 128a108.1 108.1 0 0 0-31.63-76.41M140 136h-24v-24.61l24-12Zm-40 71.25V160h56v47.25a84.73 84.73 0 0 1-56 0m87.4-19.84a85 85 0 0 1-7.4 6.55V156a20 20 0 0 0-16-19.6V80a12 12 0 0 0-17.37-10.73l-48 24A12 12 0 0 0 92 104v32.41A20 20 0 0 0 76 156v38a85 85 0 0 1-7.4-6.55a84 84 0 1 1 118.8 0Z");
}
</style><path class="sv1k_wbgh"/>`,
		"fallback": "ph:highlighter-circle-bold",
	});
}

export default Component;
