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
		"content": `<style>.art4liv1x {
  fill: currentColor;
  d: path("M9 15V9l-3 3zm9-3l-3-3v6zM2 20V4h20v16zM20 6H4v12h16zM4 6v12z");
}
</style><path class="art4liv1x"/>`,
		"fallback": "material-symbols:fit-page-width-outline-sharp",
	});
}

export default Component;
