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
		"content": `<style>.r8c86-bpq {
  fill: currentColor;
  d: path("M6 13h9v-2H6zm0-3h9V8H6zM2 20V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="r8c86-bpq"/>`,
		"fallback": "material-symbols:featured-play-list-outline-sharp",
	});
}

export default Component;
