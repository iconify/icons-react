import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ttk28eiep {
  fill: currentColor;
  d: path("M8.796 2.236a.75.75 0 0 0-1.092 0l-4 4.25a.75.75 0 1 0 1.092 1.028L7.5 4.641V14.75A3.25 3.25 0 0 0 10.75 18h4.5a.75.75 0 0 0 0-1.5h-4.5A1.75 1.75 0 0 1 9 14.75V4.641l2.704 2.873a.75.75 0 1 0 1.092-1.028z");
}
</style><path class="ttk28eiep"/>`,
		"fallback": "fluent:arrow-enter-up-20-filled",
	});
}

export default Component;
