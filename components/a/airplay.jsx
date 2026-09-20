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
		"content": `<style>.gwfga1mth {
  fill: currentColor;
  d: path("M134.08 154.79a8 8 0 0 0-12.15 0l-48 56A8 8 0 0 0 80 224h96a8 8 0 0 0 6.07-13.21ZM97.39 208L128 172.29L158.61 208ZM232 64v112a24 24 0 0 1-24 24h-8a8 8 0 0 1 0-16h8a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8H48a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h8a8 8 0 0 1 0 16h-8a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h160a24 24 0 0 1 24 24");
}
</style><path class="gwfga1mth"/>`,
		"fallback": "ph:airplay",
	});
}

export default Component;
