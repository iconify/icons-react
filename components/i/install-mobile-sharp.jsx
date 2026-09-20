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
		"content": `<style>.hgi27wbjh {
  fill: currentColor;
  d: path("M6 22V2h8.077v3.5H7v13h10v-2h1V22zm12-8.711L13.692 8.98l.708-.708l3.1 3.1V3.5h1v7.873l3.1-3.1l.708.708z");
}
</style><path class="hgi27wbjh"/>`,
		"fallback": "material-symbols-light:install-mobile-sharp",
	});
}

export default Component;
