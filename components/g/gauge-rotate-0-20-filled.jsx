import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lc2l43mzo {
  fill: currentColor;
  d: path("M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 1.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13m-.639 1.538c.118-.673 1.028-.715 1.244-.126l.034.126c.26 1.531.537 3.06.761 4.597c.056.381.1.715.1.865a1.5 1.5 0 0 1-3 0c0-.15.044-.484.1-.865c.177-1.21.553-3.4.761-4.597");
}
</style><path class="lc2l43mzo"/>`,
		"fallback": "fluent:gauge-rotate-0-20-filled",
	});
}

export default Component;
