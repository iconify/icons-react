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
		"content": `<style>.rmxz-cb0x {
  fill: currentColor;
  d: path("M2 20V8h3V4h6v4h2V4h6v4h3v12z");
}
</style><path class="rmxz-cb0x"/>`,
		"fallback": "material-symbols:brick-sharp",
	});
}

export default Component;
