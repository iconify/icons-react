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
		"content": `<style>.kw4nc3bke {
  fill: currentColor;
  d: path("M14.586 9H11a3 3 0 0 0-3 3v9a1 1 0 0 1-2 0v-9a5 5 0 0 1 5-5h3.586l-3.293-3.293a.999.999 0 1 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a.999.999 0 1 1-1.414-1.414Z");
}
</style><path class="kw4nc3bke"/>`,
		"fallback": "coolicons:arrow-turn-up-right-bulk-round",
	});
}

export default Component;
