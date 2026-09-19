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
		"content": `<style>.mheqxacnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 12.549l9.514 25.119L24 10.332l9.986 27.336l9.514-25.12L24 32.399z");
}
</style><path class="mheqxacnc"/>`,
		"fallback": "arcticons:34hd",
	});
}

export default Component;
