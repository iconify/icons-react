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
		"content": `<style>.rg4w33t9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.887 7.969C10.704 6.424 15.553 5.5 20.832 5.5c12.3 0 21.347 5.019 21.347 11.21s-9.046 11.209-21.347 11.209c-8.29 0-15.01-1.755-15.01-3.919s6.72-3.919 15.01-3.919c12.3 0 21.347 5.019 21.347 11.21S33.133 42.5 20.832 42.5c-5.279 0-10.128-.925-13.945-2.47");
}
</style><path class="rg4w33t9y"/>`,
		"fallback": "arcticons:bipa",
	});
}

export default Component;
