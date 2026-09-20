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
		"content": `<style>.b02uf93_l {
  fill: currentColor;
  d: path("M2 22V2h2v20zm11-5V7h3v10zm-6 0V7h3v10z");
}
</style><path class="b02uf93_l"/>`,
		"fallback": "material-symbols:align-justify-flex-start-sharp",
	});
}

export default Component;
