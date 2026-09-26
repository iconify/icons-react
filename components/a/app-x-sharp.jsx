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
		"content": `<style>.gos3aq1fi {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21L3 21L3 3L21 3L21 12M14.7071 14.7071L21.2929 21.2929M21.2929 14.7071L14.7071 21.2929");
}
</style><path class="gos3aq1fi"/>`,
		"fallback": "keyline-icons:app-x-sharp",
	});
}

export default Component;
