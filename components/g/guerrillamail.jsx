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
		"content": `<style>.ifcreu08k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.8 16.2h20.8v19.5a4.39 4.39 0 0 1-3.9 3.9h-13a4.39 4.39 0 0 1-3.9-3.9Zm20.8 0h1.3V11h-5.85l-2.6-2.6h-6.5l-2.6 2.6H4.5v5.2h1.3m24.7 1.95h13m-13 7.8h11.05m-11.05 7.8h7.15");
}
</style><path class="ifcreu08k"/>`,
		"fallback": "arcticons:guerrillamail",
	});
}

export default Component;
