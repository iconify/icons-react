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
		"content": `<style>.eruwtabiv {
  fill: currentColor;
  d: path("M6 17h1.5v-1.5h9V17H18v-6.35h-1.5V7h-9v3.65H6zm3-6.5v-2h6v2zM7.5 14v-2h9v2zM2 22V2h20v20z");
}
</style><path class="eruwtabiv"/>`,
		"fallback": "material-symbols:bedroom-child-sharp",
	});
}

export default Component;
