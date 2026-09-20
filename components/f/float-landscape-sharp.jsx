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
		"content": `<style>.i-u27x01k {
  fill: currentColor;
  d: path("M2 20V4h20v7h-7v9Zm15 0v-7h5v7Z");
}
</style><path class="i-u27x01k"/>`,
		"fallback": "material-symbols:float-landscape-sharp",
	});
}

export default Component;
