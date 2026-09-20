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
		"content": `<style>.xmb3dqb6v {
  fill: currentColor;
  d: path("M10 17h9v-6h-9zm-8 3V4h20v16z");
}
</style><path class="xmb3dqb6v"/>`,
		"fallback": "material-symbols:branding-watermark-sharp",
	});
}

export default Component;
