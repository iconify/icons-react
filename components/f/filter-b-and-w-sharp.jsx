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
		"content": `<style>.co4_38baj {
  fill: currentColor;
  d: path("M20 20H4V4h16zM5.02 19h6.99v-8L19 19.02V5h-6.99v6z");
}
</style><path class="co4_38baj"/>`,
		"fallback": "material-symbols-light:filter-b-and-w-sharp",
	});
}

export default Component;
