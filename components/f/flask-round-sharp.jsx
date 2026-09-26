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
		"content": `<style>.dw6mbk9pw {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 2L14.5 2L14.5 8.4617C17.2101 9.4979 19 12.0986 19 15C19 18.866 15.866 22 12 22C8.134 22 5 18.866 5 15C5 12.0986 6.7899 9.4979 9.5 8.4617L9.5 2ZM7 2L17 2M5.0718 16L18.9282 16");
}
</style><path class="dw6mbk9pw"/>`,
		"fallback": "keyline-icons:flask-round-sharp",
	});
}

export default Component;
