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
		"content": `<style>.msxt36a4d {
  fill: currentColor;
  d: path("M8.75 6c-.69 0-1.25.56-1.25 1.25v35.5a1.25 1.25 0 1 0 2.5 0V33h31.25a1.25 1.25 0 0 0 1.007-1.99L33.801 19.5l8.456-11.51A1.25 1.25 0 0 0 41.25 6z");
}
</style><path class="msxt36a4d"/>`,
		"fallback": "fluent:flag-48-filled",
	});
}

export default Component;
