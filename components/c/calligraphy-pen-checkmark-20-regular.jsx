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
		"content": `<style>.cdtp3acog {
  d: path("M14.845 10.99a5.6 5.6 0 0 1-1.085-.04l-3.26 5.561v-5.645a1 1 0 1 0-1 0v5.645L6.216 10.91a1.5 1.5 0 0 1-.062-1.4L7.816 6h1.206a5.6 5.6 0 0 1 0-1H6.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 6h.21L5.25 9.08a2.5 2.5 0 0 0 .103 2.335l3.463 5.907a1.373 1.373 0 0 0 2.368 0l3.463-5.907q.12-.206.198-.426");
}

.cuyn6tgcc {
  fill: currentColor;
}

.j22bjubwj {
  d: path("M14.5 10a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m2.354-5.646l-3 3a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647l2.646-2.647a.5.5 0 0 1 .708.708");
}
</style><g class="cuyn6tgcc"><path class="j22bjubwj"/><path class="cdtp3acog"/></g>`,
		"fallback": "fluent:calligraphy-pen-checkmark-20-regular",
	});
}

export default Component;
