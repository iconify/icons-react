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
		"content": `<style>.klfu0cc5j {
  fill: currentColor;
  d: path("M2 22v-1.02l5.25-1.451v-3.145H4V6H3V5h2.885V3.77h12.23V5H21v1h-1v8.577h-3.212v2.356L22 15.5v1.02zm6.712-2.867l6.615-1.804v-2.752H12.5v1.808H8.711zM5 13h6.5V6H5zm7.5-1.808H19V6h-6.5z");
}
</style><path class="klfu0cc5j"/>`,
		"fallback": "material-symbols-light:funicular",
	});
}

export default Component;
