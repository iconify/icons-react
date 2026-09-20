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
		"content": `<style>.us3jfsahx {
  fill: currentColor;
  d: path("M4 11.192h16V8.808H4zM19.5 21.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM3 19V5h18v7.5h-1.5q-2.075 0-3.537 1.463T14.5 17.5V19z");
}
</style><path class="us3jfsahx"/>`,
		"fallback": "material-symbols-light:add-card-sharp",
	});
}

export default Component;
