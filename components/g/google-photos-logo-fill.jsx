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
		"content": `<style>.o1eoztm7z {
  fill: currentColor;
  d: path("M232 120h-39.51A72 72 0 0 0 128 16a8 8 0 0 0-8 8v39.51A72 72 0 0 0 16 128a8 8 0 0 0 8 8h39.51A72 72 0 0 0 128 240a8 8 0 0 0 8-8v-39.51A72 72 0 0 0 240 128a8 8 0 0 0-8-8M88 72a55.3 55.3 0 0 1 32 10v38H32.57A56.09 56.09 0 0 1 88 72m80 112a55.3 55.3 0 0 1-32-10v-38h87.43A56.09 56.09 0 0 1 168 184");
}
</style><path class="o1eoztm7z"/>`,
		"fallback": "ph:google-photos-logo-fill",
	});
}

export default Component;
