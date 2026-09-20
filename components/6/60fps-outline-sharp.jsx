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
		"content": `<style>.l5_hg7kll {
  fill: currentColor;
  d: path("M2 19V5h8v3H5v2h6v9zm3-3h3v-3H5zm10 0h4V8h-4zm-3 3V5h10v14z");
}
</style><path class="l5_hg7kll"/>`,
		"fallback": "material-symbols:60fps-outline-sharp",
	});
}

export default Component;
