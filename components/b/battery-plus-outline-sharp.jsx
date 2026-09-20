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
		"content": `<style>.btrf1pbfp {
  fill: currentColor;
  d: path("M7 22V4h3V2h4v2h3v8q-.525 0-1.025.088T15 12.35V6H9v14h2.35q.2.575.488 1.075t.687.925zm9 0v-3h-3v-2h3v-3h2v3h3v2h-3v3z");
}
</style><path class="btrf1pbfp"/>`,
		"fallback": "material-symbols:battery-plus-outline-sharp",
	});
}

export default Component;
