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
		"content": `<style>.wpzct1g7y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 20v1H4V5h1m6 0h9v9M4 9h5m6 0h5m-4-6v2M2 2l20 20");
}
</style><path class="wpzct1g7y"/>`,
		"fallback": "coolicons:calendar-off-sharp",
	});
}

export default Component;
