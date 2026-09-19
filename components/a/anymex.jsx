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
		"content": `<style>.snmekoqbi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.918 20.186L6.956 43.31L23.836 4.5l17.208 39");
}
</style><path class="snmekoqbi"/>`,
		"fallback": "arcticons:anymex",
	});
}

export default Component;
