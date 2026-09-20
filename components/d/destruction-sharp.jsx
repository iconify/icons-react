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
		"content": `<style>.m4bw96rjc {
  fill: currentColor;
  d: path("M4 20.23v-6.442h16v6.443zm2.66-7.941l-3.622-2.1l5.096-.866l-1.393-5.048l4.263 3.044L13.6 2.77l.865 5.154l5.048-1.394l-3.025 4.263l2.647 1.496z");
}
</style><path class="m4bw96rjc"/>`,
		"fallback": "material-symbols-light:destruction-sharp",
	});
}

export default Component;
