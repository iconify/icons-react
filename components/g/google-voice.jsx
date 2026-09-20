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
		"content": `<style>.a7qkshbtv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.015 5.407q-.346 0-.687.014a2.534 2.534 0 0 0-2.27 2.52v16.467a2.534 2.534 0 0 0 2.534 2.533H40.06c1.31 0 2.387-.994 2.52-2.268q.013-.342.013-.687c0-10.261-8.318-18.58-18.578-18.58Z");
}

.qm-6xqbjg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.383 14.071l.008-.008a4.223 4.223 0 0 1 5.942.03l2.754 2.754a3.38 3.38 0 0 1 0 4.777l-.993.993a2.53 2.53 0 0 0 0 3.582l5.285 5.284c.989.99 2.593.99 3.582 0l.993-.992a3.38 3.38 0 0 1 4.777 0l3.176 3.176a4.22 4.22 0 0 1 .03 5.94v.002l-.035.034l-.174.175h-.007c-3.745 3.52-9.636 3.451-13.296-.209L8.391 27.575c-3.66-3.66-3.73-9.55-.209-13.296v-.003a.002.002 0 0 1 0-.004l.179-.179z");
}
</style><path class="qm-6xqbjg"/><path class="a7qkshbtv"/>`,
		"fallback": "arcticons:google-voice",
	});
}

export default Component;
