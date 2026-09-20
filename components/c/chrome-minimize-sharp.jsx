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
		"content": `<style>.t8rg3ebrj {
  fill: currentColor;
  d: path("M4 20v-2h16v2Z");
}
</style><path class="t8rg3ebrj"/>`,
		"fallback": "material-symbols:chrome-minimize-sharp",
	});
}

export default Component;
