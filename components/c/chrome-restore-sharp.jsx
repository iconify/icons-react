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
		"content": `<style>.nxvm5eb-b {
  fill: currentColor;
  d: path("M8 16V4h12v12Zm-4 4V8.525h2V18h9.475v2Z");
}
</style><path class="nxvm5eb-b"/>`,
		"fallback": "material-symbols:chrome-restore-sharp",
	});
}

export default Component;
