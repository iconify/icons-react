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
		"content": `<style>.pwhfckbzl {
  fill: currentColor;
  d: path("M10 17h9v-6h-9zm-8 3V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="pwhfckbzl"/>`,
		"fallback": "material-symbols:branding-watermark-outline-sharp",
	});
}

export default Component;
