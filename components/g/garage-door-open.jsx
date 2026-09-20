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
		"content": `<style>.o-8p81b-w {
  fill: currentColor;
  d: path("M8.327 12.596h7.346v-1.884H8.327zm3.683-4.615q.3 0 .51-.21t.21-.52t-.21-.521t-.52-.21q-.29 0-.51.21q-.22.209-.22.52t.22.52t.52.21M5 19.02V9.634H3.437L12 3.077l8.539 6.558H19v9.384h-3.327v-5.538H8.327v5.538z");
}
</style><path class="o-8p81b-w"/>`,
		"fallback": "material-symbols-light:garage-door-open",
	});
}

export default Component;
