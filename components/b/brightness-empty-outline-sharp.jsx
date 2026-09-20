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
		"content": `<style>.pklsvihpg {
  fill: currentColor;
  d: path("M12 21.916L9.069 19H5v-4.069L2.085 12L5 9.069V5h4.069L12 2.085L14.931 5H19v4.069L21.916 12L19 14.931V19h-4.069zm0-1.416l2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5L9.5 6H6v3.5L3.5 12L6 14.5V18h3.5zm0-8.5");
}
</style><path class="pklsvihpg"/>`,
		"fallback": "material-symbols-light:brightness-empty-outline-sharp",
	});
}

export default Component;
