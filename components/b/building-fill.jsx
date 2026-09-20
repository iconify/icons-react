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
		"content": `<style>.nfhejftft {
  fill: currentColor;
  d: path("M232 224h-24V32h8a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16h8v192H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M88 56h24a8 8 0 0 1 0 16H88a8 8 0 0 1 0-16m0 40h24a8 8 0 0 1 0 16H88a8 8 0 0 1 0-16m-8 48a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16H88a8 8 0 0 1-8-8m72 80h-48v-40h48Zm16-72h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16m0-40h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16m0-40h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16");
}
</style><path class="nfhejftft"/>`,
		"fallback": "ph:building-fill",
	});
}

export default Component;
