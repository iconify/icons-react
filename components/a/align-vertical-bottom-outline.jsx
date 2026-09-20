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
		"content": `<style>.v2-u9hb8i {
  fill: currentColor;
  d: path("M2 22v-2h20v2zm5-4V2h3v16zm7 0V8h3v10z");
}
</style><path class="v2-u9hb8i"/>`,
		"fallback": "material-symbols:align-vertical-bottom-outline",
	});
}

export default Component;
