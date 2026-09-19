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
		"content": `<style>.mvtve0b-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.4 13.6l-4.628 4.628l.013-12.727H42.5l-4.629 4.628zM13.599 34.401l4.615-4.615v12.715H5.5l4.628-4.629zM42.5 42.5l-37-37");
}

.wdodg2bza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.311 41.09a17.417 17.417 0 0 0 8.991-29.392M20.675 6.924a17.397 17.397 0 0 0-8.977 29.379");
}
</style><path class="wdodg2bza"/><path class="mvtve0b-c"/>`,
		"fallback": "arcticons:backgroundrestrictor",
	});
}

export default Component;
