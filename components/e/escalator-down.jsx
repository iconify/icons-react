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
		"content": `<style>.oauhm6snj {
  fill: currentColor;
  d: path("M170.34 85.66a8 8 0 0 1 11.32-11.32L192 84.69V48a8 8 0 0 1 16 0v36.69l10.34-10.35a8 8 0 0 1 11.32 11.32l-24 24a8 8 0 0 1-11.32 0ZM240 160v40a16 16 0 0 1-16 16h-56a8 8 0 0 1-5.88-2.57L68.5 112H32a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h56a8 8 0 0 1 5.88 2.57L187.5 144H224a16 16 0 0 1 16 16m-16 0h-40a8 8 0 0 1-5.88-2.57L84.5 56H32v40h40a8 8 0 0 1 5.88 2.57L171.5 200H224Z");
}
</style><path class="oauhm6snj"/>`,
		"fallback": "ph:escalator-down",
	});
}

export default Component;
