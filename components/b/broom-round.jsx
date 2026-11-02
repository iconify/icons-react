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
		"content": `<style>.fdjscxbow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 20H6c-.919 0-1.46-1.081-1-2l2-4c.613-1.226 1.387-2 2-2h6c.613 0 1.387.774 2 2l2 4c.46.919-.081 2-1 2zm-2 0v-3m4 3v-3M12 3v9");
}
</style><path class="fdjscxbow"/>`,
		"fallback": "coolicons:broom-round",
	});
}

export default Component;
