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
		"content": `<style>.yiavoac0w {
  fill: currentColor;
  d: path("M40.057 9.894a1.5 1.5 0 0 0-1.113-2.787L7.392 19.702c-2.078.83-2.104 3.76-.042 4.627l29.258 12.293l-7.728 3.513a1.5 1.5 0 0 0 1.241 2.73l11-5a1.5 1.5 0 0 0 .764-1.942l-5-12a1.5 1.5 0 1 0-2.77 1.154l3.66 8.781L9.637 22.036z");
}
</style><path class="yiavoac0w"/>`,
		"fallback": "fluent:arrow-turn-left-right-48-filled",
	});
}

export default Component;
