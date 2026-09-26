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
		"content": `<style>.tg-d9bb-n {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.7008 11.8289L12 19L19.2992 11.8289M12 4L12 18.7302");
}
</style><path class="tg-d9bb-n"/>`,
		"fallback": "keyline-icons:arrow-down-sharp",
	});
}

export default Component;
