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
		"content": `<style>.i-1-d797w {
  fill: currentColor;
  d: path("m12 17.425l-7-7V15H3V7h8v2H6.4l5.6 5.6L19.6 7L21 8.425z");
}
</style><path class="i-1-d797w"/>`,
		"fallback": "material-symbols:call-missed",
	});
}

export default Component;
