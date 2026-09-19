import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.htft47b4g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m38.055 30.023l-26.84-12.509a2.2 2.2 0 0 1-1.27-1.992V6.6c0-.804.835-1.335 1.563-.996l26.547 12.373zM25.13 24l-13.915 6.486a2.2 2.2 0 0 0-1.27 1.992V41.4c0 .804.835 1.335 1.563.996l26.547-12.373");
}
</style><path class="htft47b4g"/>`,
		"fallback": "arcticons:devbytes",
	});
}

export default Component;
