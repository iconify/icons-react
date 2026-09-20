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
		"content": `<style>.epuj6y-rw {
  fill: currentColor;
  d: path("M7.423 20L12 15.423L16.577 20zM3 18V4h18v14h-3l-6-6l-6 6z");
}
</style><path class="epuj6y-rw"/>`,
		"fallback": "material-symbols-light:airplay-sharp",
	});
}

export default Component;
