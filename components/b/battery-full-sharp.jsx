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
		"content": `<style>.jd57mfbtj {
  fill: currentColor;
  d: path("M7 22V4h3V2h4v2h3v18z");
}
</style><path class="jd57mfbtj"/>`,
		"fallback": "material-symbols:battery-full-sharp",
	});
}

export default Component;
