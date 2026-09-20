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
		"content": `<style>.d3y2-bczb {
  fill: currentColor;
  d: path("m12 13.5l6-4l-6-4zm-8.3 8.625L1.85 7.2L5 6.85V19h13.3l.125 1.325zM7 17V2h15v15z");
}
</style><path class="d3y2-bczb"/>`,
		"fallback": "material-symbols:animated-images-sharp",
	});
}

export default Component;
