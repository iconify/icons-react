import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":230};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.iulkdfb1v {
  fill: var(--svg-color--c4373a, #c4373a);
  d: path("M256 0v27.43l-60.039 26.468v123.077L256 203.728v26.18L27.017 126.865L0 115.372l27.017-12.389zm-83.138 63.932l-115.943 51.36l115.943 51.647z");
}
</style><path class="iulkdfb1v"/>`,
		"fallback": "logos:aerospike-icon",
	});
}

export default Component;
