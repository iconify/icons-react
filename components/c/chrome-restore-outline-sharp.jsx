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
		"content": `<style>.lks2k4pvb {
  fill: currentColor;
  d: path("M8 16V4h12v12Zm2-2h8V6h-8Zm-6 6V8.525h2V18h9.475v2Zm6-6V6v8Z");
}
</style><path class="lks2k4pvb"/>`,
		"fallback": "material-symbols:chrome-restore-outline-sharp",
	});
}

export default Component;
