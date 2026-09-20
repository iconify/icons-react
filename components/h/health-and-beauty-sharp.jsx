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
		"content": `<style>.cv0jw0ref {
  fill: currentColor;
  d: path("M16 22v-2h4v-2h-4v-2h4v-2h-4v-2h4v-2h-4V8h4V6h-4V4h7v18zM5 22L1 11l5-3V2h4v6l5 3l-4 11z");
}
</style><path class="cv0jw0ref"/>`,
		"fallback": "material-symbols:health-and-beauty-sharp",
	});
}

export default Component;
