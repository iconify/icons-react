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
		"content": `<style>.isqqr9lpk {
  fill: currentColor;
  d: path("m247.59 116.35l-88.18-56.17a14 14 0 0 0-14.22-.46A13.83 13.83 0 0 0 138 71.84v41L55.41 60.18a14 14 0 0 0-14.22-.46A13.83 13.83 0 0 0 34 71.84v112.32a13.83 13.83 0 0 0 7.19 12.12a14 14 0 0 0 14.22-.46L138 143.21v40.95a13.83 13.83 0 0 0 7.19 12.12a14 14 0 0 0 14.22-.46l88.18-56.17a13.79 13.79 0 0 0 0-23.3m-110.44 13.18L49 185.69a1.9 1.9 0 0 1-2 .06a1.73 1.73 0 0 1-1-1.59V71.84a1.73 1.73 0 0 1 1-1.59a2 2 0 0 1 1-.26a1.87 1.87 0 0 1 1 .32l88.19 56.16a1.8 1.8 0 0 1 0 3.06Zm104 0L153 185.69a1.9 1.9 0 0 1-2 .06a1.73 1.73 0 0 1-1-1.59V71.84a1.73 1.73 0 0 1 1-1.59a2 2 0 0 1 1-.26a1.87 1.87 0 0 1 1 .32l88.19 56.16a1.8 1.8 0 0 1 0 3.06Z");
}
</style><path class="isqqr9lpk"/>`,
		"fallback": "ph:fast-forward-light",
	});
}

export default Component;
