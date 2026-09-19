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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.p5_wfsbsy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m15.384 20.788l2.639-1.437v10.555M9.5 20.788l2.639-1.437v10.555m10.443 0l5.68-10.555h-6.993M32.82 29.906l5.68-10.555h-6.993");
}
</style><path class="i9clfwm2k"/><path class="p5_wfsbsy"/>`,
		"fallback": "arcticons:1177",
	});
}

export default Component;
