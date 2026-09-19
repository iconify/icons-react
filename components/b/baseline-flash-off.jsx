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
		"content": `<style>.tr5eec-en {
  fill: currentColor;
  d: path("M3.27 3L2 4.27l5 5V13h3v9l3.58-6.14L17.73 20L19 18.73zM17 10h-4l4-8H7v2.18l8.46 8.46z");
}
</style><path class="tr5eec-en"/>`,
		"fallback": "ic:baseline-flash-off",
	});
}

export default Component;
