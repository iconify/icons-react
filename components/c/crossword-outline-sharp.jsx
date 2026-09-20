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
		"content": `<style>.eilgs0b3u {
  fill: currentColor;
  d: path("M10 20h4v-4h-4zm-6-6h4v-4H4zm6 0h4v-4h-4zm6 0h4v-4h-4zm0-6h4V4h-4zM8 22v-6H2V8h12V2h8v14h-6v6z");
}
</style><path class="eilgs0b3u"/>`,
		"fallback": "material-symbols:crossword-outline-sharp",
	});
}

export default Component;
