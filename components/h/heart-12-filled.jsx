import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vrp267e8n {
  fill: currentColor;
  d: path("M5.656 2.737a2.394 2.394 0 0 0-3.447-.01c-.95.975-.945 2.559.01 3.537l3.53 3.623c.146.15.384.15.53 0l3.513-3.602a2.55 2.55 0 0 0-.01-3.535a2.395 2.395 0 0 0-3.45-.009l-.336.345z");
}
</style><path class="vrp267e8n"/>`,
		"fallback": "fluent:heart-12-filled",
	});
}

export default Component;
