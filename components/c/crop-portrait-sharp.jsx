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
		"content": `<style>.rklg7vb0c {
  fill: currentColor;
  d: path("M4 22V2h16v20z");
}
</style><path class="rklg7vb0c"/>`,
		"fallback": "material-symbols:crop-portrait-sharp",
	});
}

export default Component;
