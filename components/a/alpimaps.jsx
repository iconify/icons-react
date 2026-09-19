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
		"content": `<style>.qbahdmh6l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.419 37.914l10.54-19.222l-4.954-8.606L12.51 37.914zm0 0H43.5L32.96 18.692M12.51 37.914H4.5l12.298-22.09l4.039 7.136");
}
</style><path class="qbahdmh6l"/>`,
		"fallback": "arcticons:alpimaps",
	});
}

export default Component;
