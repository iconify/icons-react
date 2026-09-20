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
		"content": `<style>.v9zhatyhm {
  fill: currentColor;
  d: path("M1 19V5h14v14zm16-8V5h6v6zm2-2h2V7h-2zM3 17h10V7H3zm1-2h8l-2.625-3.5L7.5 14l-1.375-1.825zm13 4v-6h6v6zm2-2h2v-2h-2zM3 17V7zm16-8V7zm0 8v-2z");
}
</style><path class="v9zhatyhm"/>`,
		"fallback": "material-symbols:gallery-thumbnail-outline-sharp",
	});
}

export default Component;
