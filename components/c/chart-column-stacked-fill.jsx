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
		"content": `<style>.lbydh0fwo {
  fill: currentColor;
  d: path("M9 7L11 7C12.1046 7 13 7.8954 13 9L13 16C13 17.1046 12.1046 18 11 18L9 18C7.8954 18 7 17.1046 7 16L7 9C7 7.8954 7.8954 7 9 7ZM17 4L19 4C20.1046 4 21 4.8954 21 6L21 16C21 17.1046 20.1046 18 19 18L17 18C15.8954 18 15 17.1046 15 16L15 6C15 4.8954 15.8954 4 17 4ZM9 9L9 11L11 11L11 9L9 9ZM17 6L17 9L19 9L19 6L17 6Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yo50hku1m {
  d: path("M3 3L3 19C3 20.1046 3.8954 21 5 21L21 21");
}
</style><g class="nrj6p8qat"><path class="lbydh0fwo"/><path class="yo50hku1m"/></g>`,
		"fallback": "keyline-icons:chart-column-stacked-fill",
	});
}

export default Component;
