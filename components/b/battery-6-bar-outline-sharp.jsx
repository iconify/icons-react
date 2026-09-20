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
		"content": `<style>.hg24okw6w {
  fill: currentColor;
  d: path("M7 22V4h3V2h4v2h3v18zM9 8h6V6H9z");
}
</style><path class="hg24okw6w"/>`,
		"fallback": "material-symbols:battery-6-bar-outline-sharp",
	});
}

export default Component;
