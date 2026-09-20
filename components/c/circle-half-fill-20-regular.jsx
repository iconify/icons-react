import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nzlcebc3s {
  fill: currentColor;
  d: path("M3 10a7 7 0 0 1 14 0zm7-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16");
}
</style><path class="nzlcebc3s"/>`,
		"fallback": "fluent:circle-half-fill-20-regular",
	});
}

export default Component;
