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
		"content": `<style>.qnw1e6t5m {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2.594 2.212C7.492 7.763 8.697 7.5 10 7.5s2.508.263 3.406.712C14.273 8.646 15 9.337 15 10.25v.745a1.5 1.5 0 0 1-1.65 1.493l-.714-.072a1.5 1.5 0 0 1-1.299-1.101l-.285-1.056l-.02-.08v-.004l-.003-.013C10.959 10.12 10.709 10 10 10s-.96.12-1.029.162l-.003.013v.004l-.02.08l-.286 1.056a1.5 1.5 0 0 1-1.298 1.101l-.715.072A1.5 1.5 0 0 1 5 10.995v-.745c0-.913.727-1.604 1.594-2.038");
}
</style><path class="qnw1e6t5m"/>`,
		"fallback": "fluent:call-square-20-regular",
	});
}

export default Component;
