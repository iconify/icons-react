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
		"content": `<style>.u41azqbfn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.456 24a4.823 4.823 0 0 1 4.868 5.91a7.356 7.356 0 0 1-6.952 5.91h-9.751l4.168-23.639h9.751a4.823 4.823 0 0 1 4.868 5.91A7.356 7.356 0 0 1 36.456 24m0 0h-9.751m-6.495 0H4.5m8.661-4.568l.579-3.287m-2.77 15.71L12.355 24");
}
</style><path class="u41azqbfn"/>`,
		"fallback": "arcticons:babbel",
	});
}

export default Component;
