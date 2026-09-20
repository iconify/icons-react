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
		"content": `<style>.rudwnqbcg {
  fill: currentColor;
  d: path("M220 216a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4m-80-40V80a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12v96a12 12 0 0 1-12 12h-40a12 12 0 0 1-12-12m8 0a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4h-40a4 4 0 0 0-4 4Zm-96 0V40a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12v136a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12m8 0a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4Z");
}
</style><path class="rudwnqbcg"/>`,
		"fallback": "ph:align-bottom-thin",
	});
}

export default Component;
