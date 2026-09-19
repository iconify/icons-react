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
		"content": `<style>.nwme90bea {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.916 11.647q-1.221-4.916-6.138-4.916l-22.12-1.232q-3.684 0-3.685 3.684L5.931 34.988q-.41 7.37 6.959 4.917l8.602-2.464q2.041-.81 3.684 0l9.834 4.916c1.22.622 2.453-.92 1.531-2.452l-2.519-4.673c-.488-.977-.244-1.72 1.387-2.286l3.286-.822q3.683-.821 3.374-3.274z");
}

.r4as2hbio {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.263 17.421a7.371 7.371 0 1 0-.033 7.836");
}
</style><path class="nwme90bea"/><path class="r4as2hbio"/>`,
		"fallback": "arcticons:comico-justoon",
	});
}

export default Component;
