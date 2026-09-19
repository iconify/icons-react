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
		"content": `<style>.d1kyr4b8c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 35.9L4.505 16.242v-1.383a3.717 3.717 0 0 1 3.722-3.728h21.998a3.717 3.717 0 0 1 3.722 3.728v1.695");
}

.v1ac39bgt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.5 11.836l-39 19.66l.005 1.645a3.717 3.717 0 0 0 3.723 3.728h21.996a3.717 3.717 0 0 0 3.723-3.728v-1.948");
}
</style><path class="d1kyr4b8c"/><path class="v1ac39bgt"/>`,
		"fallback": "arcticons:capcut",
	});
}

export default Component;
