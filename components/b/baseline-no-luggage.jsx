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
		"content": `<style>.wyqwlgb-a {
  fill: currentColor;
  d: path("M12.75 9v.92l1.75 1.75V9H16v4.17l3 3V8c0-1.1-.9-2-2-2h-2V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3h-.17l3 3zM10.5 3.5h3V6h-3zm10.69 17.69L2.81 2.81L1.39 4.22l3.63 3.63c0 .05-.02.1-.02.15v11c0 1.1.9 2 2 2c0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1c.34 0 .65-.09.93-.24l1.85 1.85zM8 18v-7.17l1.5 1.5V18zm4.75 0h-1.5v-3.92l1.5 1.5z");
}
</style><path class="wyqwlgb-a"/>`,
		"fallback": "ic:baseline-no-luggage",
	});
}

export default Component;
