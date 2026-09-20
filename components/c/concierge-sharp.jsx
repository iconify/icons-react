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
		"content": `<style>.r8j8a601t {
  fill: currentColor;
  d: path("M1 13h4V2H1zm6 0h1.975L17 10V8h-4l-1.75.675l-.35-.925L13 7h9V5l-8-3l-7 1.975zm3 9h13v-2H10zm1-3h11q0-2.025-1.287-3.537T17.5 13.6v-1.625h-2V13.6q-1.95.35-3.225 1.863T11 19");
}
</style><path class="r8j8a601t"/>`,
		"fallback": "material-symbols:concierge-sharp",
	});
}

export default Component;
