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

.smtr0ubyx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.89 31.61l5.647 4.602a.806.806 0 0 0 1.315-.625V22.134a.807.807 0 0 0-1.315-.625l-5.647 4.573m-1.618 10.119H12.767a1.62 1.62 0 0 1-1.619-1.619V23.138a1.62 1.62 0 0 1 1.619-1.619h15.505c.894 0 1.618.725 1.618 1.619v11.444a1.62 1.62 0 0 1-1.618 1.62M11.159 15.309a3.7 3.7 0 0 0 7.4.001a3.7 3.7 0 0 0-7.4-.005zm11.175 0a3.7 3.7 0 0 0 7.4.003v-.003a3.7 3.7 0 0 0-7.4-.003z");
}
</style><path class="smtr0ubyx"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:emoji-cinema",
	});
}

export default Component;
