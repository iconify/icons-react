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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.p517w2pck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.537 20.037a5.537 5.537 0 0 0-11.074 0a5.53 5.53 0 0 0 2.747 4.777L18.786 33.5h10.427l-2.424-8.686a5.53 5.53 0 0 0 2.748-4.777");
}
</style><circle class="cpk0fnbgt"/><path class="p517w2pck"/>`,
		"fallback": "arcticons:fatsecret",
	});
}

export default Component;
