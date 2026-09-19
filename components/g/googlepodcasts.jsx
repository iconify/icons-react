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
		"content": `<style>.lu7-n9u6e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.6 21.13v5.77M6.4 21.13v5.77M24 3.5v5.25m0 30.5v5.25m0-30.02v19.04m8.8-22.26v5.77m0 5.73v13.98m-17.6 0v-5.77m0-5.73V11.26");
}
</style><path class="lu7-n9u6e"/>`,
		"fallback": "arcticons:googlepodcasts",
	});
}

export default Component;
