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
		"content": `<style>.zkuiu2b9k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 42.5c8.495 0 13.848-7.914 13.848-17.282C37.848 15.537 32.288 5.5 24 5.5S10.152 15.537 10.152 25.218C10.152 34.587 15.505 42.5 24 42.5");
}
</style><path class="zkuiu2b9k"/>`,
		"fallback": "arcticons:emoji-egg",
	});
}

export default Component;
