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
		"content": `<style>.cfj06-b1z {
  fill: currentColor;
  d: path("M12 8a3 3 0 0 0-3 3v3.586l3.293-3.293a.999.999 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a.999.999 0 1 1 1.414-1.414L7 14.586V11a5 5 0 0 1 5-5h9a1 1 0 0 1 0 2Z");
}
</style><path class="cfj06-b1z"/>`,
		"fallback": "coolicons:arrow-turn-left-down-fill-round",
	});
}

export default Component;
