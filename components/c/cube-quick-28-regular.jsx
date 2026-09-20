import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.h5x10007t {
  fill: currentColor;
  d: path("M18.722 8.552a.5.5 0 0 0-.444 0l-4.5 2.224a.5.5 0 0 0-.278.448v5.553a.5.5 0 0 0 .278.448l4.5 2.225a.5.5 0 0 0 .444 0l4.5-2.225a.5.5 0 0 0 .278-.448v-5.553a.5.5 0 0 0-.278-.448zm-1.108-1.345a2 2 0 0 1 1.772 0l4.5 2.224A2 2 0 0 1 25 11.224v5.553a2 2 0 0 1-1.114 1.793l-4.5 2.224a2 2 0 0 1-1.772 0l-4.5-2.224A2 2 0 0 1 12 16.777v-5.553a2 2 0 0 1 1.114-1.793zM4 9.251a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5A.75.75 0 0 1 4 9.25m-2 4.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m2.75 3.75a.75.75 0 0 0 0 1.5h5a.75.75 0 1 0 0-1.5zm11.36-5.909a.75.75 0 0 0-.72 1.317l2.36 1.287v3.055a.75.75 0 1 0 1.5 0v-3.055l2.36-1.287a.75.75 0 1 0-.72-1.317l-2.39 1.304z");
}
</style><path class="h5x10007t"/>`,
		"fallback": "fluent:cube-quick-28-regular",
	});
}

export default Component;
