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
		"content": `<style>.f-fxrg6hz {
  fill: currentColor;
  d: path("M6 22V2h12v20z");
}
</style><path class="f-fxrg6hz"/>`,
		"fallback": "material-symbols:crop-2-3-sharp",
	});
}

export default Component;
