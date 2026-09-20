import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nx0irwbjg {
  fill: currentColor;
  d: path("m217.15 52.17l-70.34-21.1l39-19.49a4 4 0 1 0-3.58-7.16L135 28a76.07 76.07 0 0 0-75 76v104a4 4 0 0 0 8 0v-36h24v60a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12V104a44.06 44.06 0 0 0-40-43.81V37.38l74.85 22.45A3.8 3.8 0 0 0 216 60a4 4 0 0 0 1.15-7.83M68 164v-60a68.08 68.08 0 0 1 64-67.87v24.06A44.06 44.06 0 0 0 92 104v60Zm100 72h-64a4 4 0 0 1-4-4v-60h72v60a4 4 0 0 1-4 4m4-132v60h-72v-60a36 36 0 0 1 72 0");
}
</style><path class="nx0irwbjg"/>`,
		"fallback": "ph:fire-extinguisher-thin",
	});
}

export default Component;
