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
		"content": `<style>.jwh2a7bvv {
  fill: currentColor;
  d: path("M8.5 14.5h1v-3H14v1.789L16.288 11L14 8.692V10.5H8.5zm3.5 6.877L2.623 12L12 2.623L21.377 12z");
}
</style><path class="jwh2a7bvv"/>`,
		"fallback": "material-symbols-light:directions-sharp",
	});
}

export default Component;
