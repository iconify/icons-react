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
		"content": `<style>.m6x9qm41a {
  fill: currentColor;
  d: path("M8.385 11.596h7.307v-1H8.385zM6 22V2h12.077v4.83H19v3.686h-.923V22zm1-1h10.077V3H7zm0 0V3z");
}
</style><path class="m6x9qm41a"/>`,
		"fallback": "material-symbols-light:ad-units-outline-sharp",
	});
}

export default Component;
