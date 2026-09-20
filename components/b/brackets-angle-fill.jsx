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
		"content": `<style>.tr9z7ybau {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M103 180a8 8 0 0 1-13.95 8l-32-56a8 8 0 0 1 0-7.94l32-56A8 8 0 0 1 103 76l-29.79 52Zm96-48l-32 56a8 8 0 0 1-13.9-7.94l29.74-52L153.05 76A8 8 0 1 1 167 68l32 56a8 8 0 0 1 0 8");
}
</style><path class="tr9z7ybau"/>`,
		"fallback": "ph:brackets-angle-fill",
	});
}

export default Component;
