import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x_p78f8lx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39.187 13.079l-7.03 21.842l-7.031-21.842l-7.031 21.842l-7.031-21.842M4.5 20.221l39 11.871");
}
</style><path class="x_p78f8lx"/>`,
		"fallback": "arcticons:anime-witcher",
	});
}

export default Component;
