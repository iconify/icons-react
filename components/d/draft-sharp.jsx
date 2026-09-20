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
		"content": `<style>.d_u9enura {
  fill: currentColor;
  d: path("M5 21V3h9.5L19 7.5V21zm9-13h4l-4-4z");
}
</style><path class="d_u9enura"/>`,
		"fallback": "material-symbols-light:draft-sharp",
	});
}

export default Component;
