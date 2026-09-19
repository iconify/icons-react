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
		"content": `<style>.cnax6wb6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.67 18.9L21.92 24l3.81 5.14l3.76-5.06Z");
}

.qsce6t-cx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17 7.15L4.5 24L17 40.85h6.7l1.83-2.46l1.83 2.46h7.08l9.06-12.22l-3.5-4.77l-9.1 12.22l-1.83-2.47l7.26-9.78l-7.23-9.55h-6.85L15 24.12l7.24 9.77l-1.82 2.46l-9-12.09L24.08 7.15Z");
}
</style><path class="qsce6t-cx"/><path class="cnax6wb6h"/>`,
		"fallback": "arcticons:gpw",
	});
}

export default Component;
