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
		"content": `<style>.q-27dc7pe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 13h2a2 2 0 0 1 2 2v4a2 2 0 1 0 4 0v-7.185a4 4 0 0 0-1.366-3.01l-4-3.5a4 4 0 0 0-5.268 0l-4 3.5A4 4 0 0 0 4 11.815V19a2 2 0 1 0 4 0v-4a2 2 0 0 1 2-2z");
}
</style><path class="q-27dc7pe"/>`,
		"fallback": "coolicons:house-garage-open-duocolor-round",
	});
}

export default Component;
