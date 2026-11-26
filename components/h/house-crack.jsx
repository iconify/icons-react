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
		"content": `<style>.lsz25159g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 10.8473L10.7072 3.47028C11.4532 2.83828 12.5468 2.83828 13.2928 3.47028L22 10.8473M4 9.15278V19C4 20.1046 4.8954 21 6 21H18C19.1046 21 20 20.1046 20 19V9.15278M12 2.99998L10.5 7.49998L13.5 9.99998L10.5 14L13.5 17L12 21");
}
</style><path class="lsz25159g"/>`,
		"fallback": "keyline-icons:house-crack",
	});
}

export default Component;
