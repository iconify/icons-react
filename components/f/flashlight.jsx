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
		"content": `<style>.sqpag2bpg {
  fill: currentColor;
  d: path("M184 16H72a16 16 0 0 0-16 16v45.33a16.12 16.12 0 0 0 3.2 9.6L80 114.67V224a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V114.67l20.8-27.74a16.12 16.12 0 0 0 3.2-9.6V32a16 16 0 0 0-16-16M72 32h112v24H72zm91.2 73.07a16.12 16.12 0 0 0-3.2 9.6V224H96V114.67a16.12 16.12 0 0 0-3.2-9.6L72 77.33V72h112v5.33ZM136 120v32a8 8 0 0 1-16 0v-32a8 8 0 0 1 16 0");
}
</style><path class="sqpag2bpg"/>`,
		"fallback": "ph:flashlight",
	});
}

export default Component;
