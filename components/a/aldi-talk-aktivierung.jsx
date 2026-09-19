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
		"content": `<style>.zaztcersr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.41 24.76l-8.832-1.234l1.916 8.709m3.458-3.737l11.096 10.265M30.41 24.761l11.096 10.265L34.59 42.5L23.494 32.235zm-18.34-.251h5.443m-5.442-4.661H26.2M16.586 5.5v10.09H6.495zm0 0h15.921v17.106m-7.489 15.665H6.494V15.59");
}
</style><path class="zaztcersr"/>`,
		"fallback": "arcticons:aldi-talk-aktivierung",
	});
}

export default Component;
