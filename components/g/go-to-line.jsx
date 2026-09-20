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
		"content": `<style>.fkz96bi0u {
  fill: currentColor;
  d: path("M11 7V5h2v2zm0 12v-2h2v2z");
}
</style><path class="fkz96bi0u"/>`,
		"fallback": "material-symbols-light:go-to-line",
	});
}

export default Component;
