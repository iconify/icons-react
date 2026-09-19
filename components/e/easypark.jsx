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
		"content": `<style>.pz5fvqbgn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.838 29.377l20.544-4.943c10.757-2.588 9.506-15.966 1.453-18.315C20.35 2.769 9.838 4.485 9.838 12.515v23.451c0 13.2 26.746 5.04 26.746 5.04");
}
</style><path class="pz5fvqbgn"/>`,
		"fallback": "arcticons:easypark",
	});
}

export default Component;
