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
		"content": `<style>.wygfzcclm {
  fill: currentColor;
  d: path("M9.162 13.5q-.182 0-.293-.124t-.111-.288q0-.042.13-.284l2.678-2.677q.092-.093.199-.143t.235-.05t.235.05t.2.143l2.677 2.677q.055.056.093.129q.037.073.037.157q0 .168-.11.289q-.112.121-.293.121z");
}
</style><path class="wygfzcclm"/>`,
		"fallback": "material-symbols-light:arrow-drop-up-rounded",
	});
}

export default Component;
