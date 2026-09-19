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
		"content": `<style>.g9wvv78hx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.797 22.187l-8.13 11.382l-1.916-1.28l7.34-11.829m0 0l7.4-10.384c.978.101 1.495.522 1.841 1.147l-6.535 10.964zm8.66-8.15c.318 2.677-2.412 6.944-3.546 9.086");
}

.hzpqnlmob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4");
}

.kjzovgkto {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.538 34.45c4.542-2.304 4.542-2.342 6.613-2.682c-.945 1.254-2.022 2.048-1.587 4.497c2.566.533 5.018-1.463 7.255-2.215c-.672.87-1.76 2.664-.434 3.023c1.118.102 1.587-.204 2.245-.389m4.036-3.114l-2.834 2.043l.92-3.325");
}
</style><path class="hzpqnlmob"/><path class="kjzovgkto"/><path class="g9wvv78hx"/>`,
		"fallback": "arcticons:inkredible",
	});
}

export default Component;
