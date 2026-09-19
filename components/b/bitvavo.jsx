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
		"content": `<style>.kyi4pnmew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 36.97L31.8 24h11.7l-7.8 12.97zm-7.8 0l15.6-25.94H20.1L4.5 36.97z");
}
</style><path class="kyi4pnmew"/>`,
		"fallback": "arcticons:bitvavo",
	});
}

export default Component;
