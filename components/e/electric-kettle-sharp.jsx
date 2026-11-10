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
		"content": `<style>.f5ad28b3z {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.119 5.5H3V9.41C3 10.14 3.039 10.88 3.383 11.52C3.822 12.33 4.642 13.23 6 13.5L6.067 13.51M16.428 5.49L20.996 5.93L18.5 11M11 8V14M5 21H20M18 17H6.96C6.424 17 5.982 16.58 5.979 16.04C5.955 11.61 6.898 3 12 3C16.777 3 18.815 8.93 18.988 16C19.002 16.55 18.553 17 18 17Z");
}
</style><path class="f5ad28b3z"/>`,
		"fallback": "keyline-icons:electric-kettle-sharp",
	});
}

export default Component;
