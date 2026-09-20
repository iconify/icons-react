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
		"content": `<style>.ob8ngzfqa {
  fill: currentColor;
  d: path("M20 22V2h2v20zM2 22V2h2v20zm13-5V7h3v10zm-9 0V7h3v10z");
}
</style><path class="ob8ngzfqa"/>`,
		"fallback": "material-symbols:align-justify-space-around-sharp",
	});
}

export default Component;
