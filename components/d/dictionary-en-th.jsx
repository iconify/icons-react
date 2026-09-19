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
		"content": `<style>.q2tj130mj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.342 30.985h5.3m0-3.985v8m-5.3-8v8m-4.96 0v-8m-2.65 0h5.3m-.616-6h-4v-8h4m-4 4h2.608m3.634 4v-8l5.3 8v-8M12.73 4.5v39H37.6a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2zm-4.33 2v35a2 2 0 0 0 2 2h2.33v-39H10.4a2 2 0 0 0-2 2");
}
</style><path class="q2tj130mj"/>`,
		"fallback": "arcticons:dictionary-en-th",
	});
}

export default Component;
