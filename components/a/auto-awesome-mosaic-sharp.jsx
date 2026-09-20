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
		"content": `<style>.mwwt_xfna {
  fill: currentColor;
  d: path("M11 21H3V3h8zm2-10V3h8v8zm0 10v-8h8v8z");
}
</style><path class="mwwt_xfna"/>`,
		"fallback": "material-symbols:auto-awesome-mosaic-sharp",
	});
}

export default Component;
