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
		"content": `<style>.e9y7b9bik {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.31 34.356a2.25 2.25 0 0 1-4.206-1.115v-1.463a2.25 2.25 0 1 1 4.501 0v.731h-4.502m5.83-6.017h1.822c1.666 0 3.017 1.353 3.017 3.023s-1.351 3.023-3.017 3.023l3.017 2.954m-3.017-9h4.142m-5.964 3.038h5.964");
}

.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.jjiu_ccsp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33 12.509v9m-17.822-.987c.552.719 1.244.986 2.207.986h1.332a2.245 2.245 0 0 0 2.246-2.245v-.01a2.245 2.245 0 0 0-2.246-2.245h-1.47A2.25 2.25 0 0 1 15 14.761a2.253 2.253 0 0 1 2.253-2.253h1.325c.962 0 1.654.268 2.206.986m6.929 3.514a2.25 2.25 0 1 1 0 4.5H24v-9h3.713a2.25 2.25 0 1 1 0 4.5m0 0H24");
}
</style><path class="jjiu_ccsp"/><path class="i9clfwm2k"/><path class="e9y7b9bik"/>`,
		"fallback": "arcticons:digital-rupee-sbi",
	});
}

export default Component;
