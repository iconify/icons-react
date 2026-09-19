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
		"content": `<style>.ef21ymror {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.249 15.636v16.728M24 4.5v39m5.751-29.441V33.94m5.752-14.003v8.125m-28.756-8.34v8.555m5.751-15.102v21.65M41.254 22.04v3.92");
}
</style><path class="ef21ymror"/>`,
		"fallback": "arcticons:fairbuds",
	});
}

export default Component;
