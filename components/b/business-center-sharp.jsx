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
		"content": `<style>.wu1oq9e8g {
  fill: currentColor;
  d: path("M2 21v-6h7v2h6v-2h7v6zm9-6v-2h2v2zm-9-2V6h6V2h8v4h6v7h-7v-2H9v2zm8-7h4V4h-4z");
}
</style><path class="wu1oq9e8g"/>`,
		"fallback": "material-symbols:business-center-sharp",
	});
}

export default Component;
