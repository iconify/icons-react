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
		"content": `<style>.h6h12wbdr {
  fill: currentColor;
  d: path("M4 4v12a3 3 0 0 0 3 3h12.382l-2.276-4.553c-.216-.431-.47-.857-.813-1.2c-.093-.093-.2-.197-.324-.247H14a1 1 0 0 1-.857-.486L10.434 8H7a1 1 0 0 1 0-2h4c.351 0 .677.184.857.486L14.566 11H16c1.348.001 2.357 1.478 2.894 2.553l3 6A1 1 0 0 1 21 21H7a5 5 0 0 1-5-5V4a1 1 0 0 1 2 0");
}
</style><path class="h6h12wbdr"/>`,
		"fallback": "coolicons:chart-burndown-fill-round",
	});
}

export default Component;
