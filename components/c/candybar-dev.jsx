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
		"content": `<style>.eh3comtjs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.494 35.494L12.506 12.506M38.32 31.884L16.116 9.68m15.689 28.562L9.758 16.195m28.732.429l5.047-2.052a1.545 1.545 0 0 0 .757-2.2l-.386-.672l-2.916.848l.489-3.26l-3.38.612H38.1l.612-3.38l-3.26.488l.848-2.916l-.672-.386a1.544 1.544 0 0 0-2.2.757L31.377 9.51M16.624 38.49l-2.052 5.047a1.545 1.545 0 0 1-2.2.757l-.672-.386l.848-2.916l-3.26.489l.612-3.38V38.1l-3.38.612l.488-3.26l-2.916.848l-.386-.672a1.544 1.544 0 0 1 .757-2.2l5.047-2.051");
}

.rhsylseag {
  cx: 24px;
  cy: 24px;
  r: 16.256px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="rhsylseag"/><path class="eh3comtjs"/>`,
		"fallback": "arcticons:candybar-dev",
	});
}

export default Component;
