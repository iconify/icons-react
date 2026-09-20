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
		"content": `<style>.y9__dtx8q {
  fill: currentColor;
  d: path("M1 19V5h2v14zm4 0V5h2v14zm4 0V5h14v14zm3-4h8l-2.6-3.5l-1.9 2.5l-1.4-1.85z");
}
</style><path class="y9__dtx8q"/>`,
		"fallback": "material-symbols:burst-mode-sharp",
	});
}

export default Component;
