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
		"content": `<style>.jcem6-bqg {
  fill: currentColor;
  d: path("M4 17v-3H2v-4h2V7h18v10z");
}
</style><path class="jcem6-bqg"/>`,
		"fallback": "material-symbols:battery-full-alt-outline-sharp",
	});
}

export default Component;
