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
		"content": `<style>.to8buh6rq {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 7L16 7L16 21.2488L15.6602 22L14.8444 21.8797L10.6083 19.6386L10.0001 19.2475L9.3917 19.6386L5.1556 21.8797L4.3398 22L4 21.2488L4 7ZM20 18.1987L20 2L8.8455 2L7.9792 3.4998");
}
</style><path class="to8buh6rq"/>`,
		"fallback": "keyline-icons:bookmarks-sharp",
	});
}

export default Component;
