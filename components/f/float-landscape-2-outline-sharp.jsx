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
		"content": `<style>.hkv8ud7kx {
  fill: currentColor;
  d: path("M13 14h5V8h-5zM2 20V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="hkv8ud7kx"/>`,
		"fallback": "material-symbols:float-landscape-2-outline-sharp",
	});
}

export default Component;
