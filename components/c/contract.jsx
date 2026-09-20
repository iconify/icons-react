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

.d50iifbha {
  d: path("M12 9a1 1 0 1 1-2 0V5a1 1 0 1 1 2 0zm-6.293 6.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z");
}

.f979qth3u {
  d: path("M11.707 9.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z");
}

.i9z26v4id {
  d: path("M11 10a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z");
}

.jmsqj3nfg {
  d: path("M5 12a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z");
}

.nyant1n6t {
  d: path("M10 15a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0z");
}
</style><g class="cuyn6tgcc"><path class="f979qth3u"/><path class="i9z26v4id"/><path class="d50iifbha"/><path class="nyant1n6t"/><path class="jmsqj3nfg"/></g>`,
		"fallback": "pepicons-pop:contract",
	});
}

export default Component;
