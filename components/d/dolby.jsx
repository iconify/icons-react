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
		"content": `<style>.ini7ytuhj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.182 11.59H43.5v24.82h0h-5.318A12.41 12.41 0 0 1 25.772 24v0a12.41 12.41 0 0 1 12.41-12.41M9.818 36.41H4.5h0V11.59h5.318A12.41 12.41 0 0 1 22.227 24h0a12.41 12.41 0 0 1-12.41 12.41");
}
</style><path class="ini7ytuhj"/>`,
		"fallback": "arcticons:dolby",
	});
}

export default Component;
