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
		"content": `<style>.vz98swbwe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 8h5V3m8 0v5h5m0 8h-5v5m-8 0v-5H3");
}
</style><path class="vz98swbwe"/>`,
		"fallback": "coolicons:fullscreen-exit-duocolor-sharp",
	});
}

export default Component;
