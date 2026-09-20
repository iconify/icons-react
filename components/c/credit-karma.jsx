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

.fs171wb7h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.133 7.636V34.37m0-5.681l12.03-12.03m-8.354 8.354L39.5 34.37m-18.635-3.345a6.47 6.47 0 0 1-5.681 3.342A6.703 6.703 0 0 1 8.5 27.683V23.34a6.703 6.703 0 0 1 6.684-6.684a6.47 6.47 0 0 1 5.68 3.342");
}
</style><path class="fs171wb7h"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:credit-karma",
	});
}

export default Component;
