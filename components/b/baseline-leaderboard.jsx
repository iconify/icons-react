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
		"content": `<style>.hz-fvomwi {
  fill: currentColor;
  d: path("M7.5 21H2V9h5.5zm7.25-18h-5.5v18h5.5zM22 11h-5.5v10H22z");
}
</style><path class="hz-fvomwi"/>`,
		"fallback": "ic:baseline-leaderboard",
	});
}

export default Component;
