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
		"content": `<style>.ob0of34yq {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 10H18M6 10C5.448 10 5 9.55 5 9C5 8.78 5.07 8.57 5.2 8.4L7 6H17L18.8 8.4C18.93 8.57 19 8.78 19 9C19 9.55 18.552 10 18 10M6 10L9 22H15L18 10M11 6L13 2H17");
}
</style><path class="ob0of34yq"/>`,
		"fallback": "keyline-icons:cup-soda-sharp",
	});
}

export default Component;
