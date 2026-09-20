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
		"content": `<style>.ukeo3wb1l {
  fill: currentColor;
  d: path("M126 136v64a6 6 0 0 1-12 0v-49.51l-69.76 69.75a6 6 0 0 1-8.48-8.48L105.51 142H56a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m82-102H80a14 14 0 0 0-14 14v48a6 6 0 0 0 12 0V48a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v128a2 2 0 0 1-2 2h-48a6 6 0 0 0 0 12h48a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14");
}
</style><path class="ukeo3wb1l"/>`,
		"fallback": "ph:arrow-square-in-light",
	});
}

export default Component;
