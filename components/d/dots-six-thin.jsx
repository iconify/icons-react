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
		"content": `<style>.m9ssonb7g {
  fill: currentColor;
  d: path("M68 92a8 8 0 1 1-8-8a8 8 0 0 1 8 8m60-8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 16a8 8 0 1 0-8-8a8 8 0 0 0 8 8M60 156a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8m68 0a8 8 0 1 0 8 8a8 8 0 0 0-8-8");
}
</style><path class="m9ssonb7g"/>`,
		"fallback": "ph:dots-six-thin",
	});
}

export default Component;
