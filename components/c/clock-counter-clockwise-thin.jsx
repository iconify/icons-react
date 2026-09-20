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
		"content": `<style>.ortfc7h5p {
  fill: currentColor;
  d: path("M132 80v45.74l38.06 22.83a4 4 0 0 1-4.12 6.86l-40-24A4 4 0 0 1 124 128V80a4 4 0 0 1 8 0m-4-44a91.42 91.42 0 0 0-65.07 27C53.05 73 44.66 82.47 36 92.86V64a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4h40a4 4 0 0 0 0-8H40.47C49.61 89 58.3 79 68.6 68.6a84 84 0 1 1 1.75 120.49a4 4 0 1 0-5.5 5.82A92 92 0 1 0 128 36");
}
</style><path class="ortfc7h5p"/>`,
		"fallback": "ph:clock-counter-clockwise-thin",
	});
}

export default Component;
