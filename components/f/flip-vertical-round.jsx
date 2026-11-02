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
		"content": `<style>.pvs2kr1fr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3H9c-.738 0-1.369.631-1 1l3 3a1.414 1.414 0 0 0 2 0l3-3c.369-.369-.262-1-1-1zm-7 9h2m4 0h2m4 0h2m-7 9H9c-.738 0-1.369-.631-1-1l3-3a1.414 1.414 0 0 1 2 0l3 3c.369.369-.262 1-1 1z");
}
</style><path class="pvs2kr1fr"/>`,
		"fallback": "coolicons:flip-vertical-round",
	});
}

export default Component;
