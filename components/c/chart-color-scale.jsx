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
		"content": `<style>.b969002zr {
  d: path("M3.75 17.5V20M12 17.5V20m8.25-2.5V20m-16.5 0h16.5");
}

.fowe4zs4n {
  d: path("M2.5 5h2.75v9H2.5ZM8 5h2.75v9H8Zm5.5 0h2.75v9H13.5Z");
}

.satey_bda {
  fill: currentColor;
  d: path("M19 5h2.75v9H19ZM8 11.75h2.75V14H8Zm5.5-2.25h2.75V14H13.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fowe4zs4n"/><path class="satey_bda"/><path class="b969002zr"/></g>`,
		"fallback": "uix-sharp:chart-color-scale",
	});
}

export default Component;
