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
		"content": `<style>.ls9p5mfsh {
  d: path("M5.232 8.974a1 1 0 0 1 .128-1.409l4-3.333a1 1 0 1 1 1.28 1.536l-4 3.334a1 1 0 0 1-1.408-.128");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.qw1y4-bvx {
  d: path("M14.768 8.974a1 1 0 0 1-1.408.128l-4-3.334a1 1 0 1 1 1.28-1.536l4 3.333a1 1 0 0 1 .128 1.409");
}

.sakhd-byb {
  d: path("M10 6a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="ls9p5mfsh"/><path class="qw1y4-bvx"/><path class="sakhd-byb"/></g>`,
		"fallback": "pepicons-pop:arrow-up",
	});
}

export default Component;
