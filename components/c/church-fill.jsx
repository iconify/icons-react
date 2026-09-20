import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nuej3-gzh {
  fill: currentColor;
  d: path("M228.12 145.14L192 123.47V104a8 8 0 0 0-4-7l-52-29.64V48h16a8 8 0 0 0 0-16h-16V16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v19.36L68 97.05a8 8 0 0 0-4 7v19.47l-36.12 21.62A8 8 0 0 0 24 152v64a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-48a16 16 0 0 1 32 0v48a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-64a8 8 0 0 0-3.88-6.86M64 208H40v-51.47l24-14.4Zm152 0h-24v-65.87l24 14.4Z");
}
</style><path class="nuej3-gzh"/>`,
		"fallback": "ph:church-fill",
	});
}

export default Component;
