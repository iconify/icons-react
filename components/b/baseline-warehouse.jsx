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
		"content": `<style>.een0ff3rj {
  fill: currentColor;
  d: path("M22 21V7L12 3L2 7v14h5v-9h10v9zm-11-2H9v2h2zm2-3h-2v2h2zm2 3h-2v2h2z");
}
</style><path class="een0ff3rj"/>`,
		"fallback": "ic:baseline-warehouse",
	});
}

export default Component;
