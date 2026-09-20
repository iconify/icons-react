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
		"content": `<style>.b-qz1vb7z {
  fill: currentColor;
  d: path("M3 20V8h1v11h14v1zm4-4V4h15v12zm3-4h4V7h-4zm5 0h4v-2h-4zm0-3h4V7h-4z");
}
</style><path class="b-qz1vb7z"/>`,
		"fallback": "material-symbols-light:full-coverage-sharp",
	});
}

export default Component;
