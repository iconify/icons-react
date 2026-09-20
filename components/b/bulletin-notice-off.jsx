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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.d2kvgvbvc {
  fill-rule: evenodd;
}

.qvnchoq5a {
  d: path("M5.75 9.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m-1 3a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75m1 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m5.664-12.672a2 2 0 0 0-2.828 0l-3.879 3.88a1 1 0 1 1-1.414-1.415l3.879-3.879a4 4 0 0 1 5.656 0l3.88 3.879a1 1 0 0 1-1.415 1.414z");
}

.uckek5ijh {
  d: path("M0 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm18 0H2v11h16z");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="uckek5ijh"/><path class="qvnchoq5a"/></g><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:bulletin-notice-off",
	});
}

export default Component;
