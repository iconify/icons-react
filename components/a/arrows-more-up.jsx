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
		"content": `<style>.mkuxsmbtn {
  fill: currentColor;
  d: path("M13 18V9H4V8h10v10zm4-3.98v-9H8v-1h10v10z");
}
</style><path class="mkuxsmbtn"/>`,
		"fallback": "material-symbols-light:arrows-more-up",
	});
}

export default Component;
