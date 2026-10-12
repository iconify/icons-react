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
		"content": `<style>.mu8ts1b0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c3 2.5 5 5 5 8a5 5 0 0 1-10 0v-2.4l2-1.6l.368 1.842L11 9c-.5-2.25 0-4.25 1-6.25Zm-7.75 14l15.5 4.5m-15.5 0l15.5-4.5");
}
</style><path class="mu8ts1b0j"/>`,
		"fallback": "iconoven:bonfire-party-sharp",
	});
}

export default Component;
