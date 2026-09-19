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
		"content": `<style>.i1h83238m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.122 10.78h9.002C36.643 10.78 43.5 16.676 43.5 24s-6.858 13.22-15.376 13.22H9.43m9.692-24.112h4.082m18.517 4.704h-29.91M41.392 30.7H4.5m38.994-6.444H4.5m14.622-8.82h4.082m-11.392 4.519h4.08m-4.081 2.19h4.082M4.5 26.42h4.081M4.5 28.541h4.081m.847 4.322h4.082m-4.081 2.19h4.081");
}
</style><path class="i1h83238m"/>`,
		"fallback": "arcticons:digi-yatra",
	});
}

export default Component;
