import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cg7rmibbl {
  fill: currentColor;
  d: path("M196 128a32 32 0 0 1-32 32h-12V96h12a32 32 0 0 1 32 32m36-72v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16M120 88a8 8 0 0 0-16 0v32H64V88a8 8 0 0 0-16 0v80a8 8 0 0 0 16 0v-32h40v32a8 8 0 0 0 16 0Zm92 40a48.05 48.05 0 0 0-48-48h-20a8 8 0 0 0-8 8v80a8 8 0 0 0 8 8h20a48.05 48.05 0 0 0 48-48");
}
</style><path class="cg7rmibbl"/>`,
		"fallback": "ph:high-definition-fill",
	});
}

export default Component;
