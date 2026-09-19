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
		"content": `<style>.vl6corb4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.166 24.611c-8.176 2.764-1.423 15.478 8.324 4.871l13.895-15.12l-.74 15.12m12.146-2.311c-3.464 4.76-9.105 1.496-7.441-3.514c1.903-5.73 9.086-6.217 8.587-1.86l.554-2.943M27.645 29.482h4m2.704-5.825H15.386");
}
</style><path class="vl6corb4d"/>`,
		"fallback": "arcticons:aeon-cinema",
	});
}

export default Component;
