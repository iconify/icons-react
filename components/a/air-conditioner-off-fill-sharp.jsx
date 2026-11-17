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
		"content": `<style>.dqgh82yqj {
  fill: currentColor;
  d: path("M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm5 4a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z");
}
</style><path class="dqgh82yqj"/>`,
		"fallback": "coolicons:air-conditioner-off-fill-sharp",
	});
}

export default Component;
