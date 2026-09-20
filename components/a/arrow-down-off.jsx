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
		"content": `<style>.atnh38bjm {
  fill-rule: evenodd;
  d: path("M10 14a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1");
}

.bz5wrnbix {
  fill-rule: evenodd;
  d: path("M14.768 11.027a1 1 0 0 1-.128 1.408l-4 3.333a1 1 0 0 1-1.28-1.536l4-3.334a1 1 0 0 1 1.408.129");
}

.cuyn6tgcc {
  fill: currentColor;
}

.ewjqafbxw {
  fill-rule: evenodd;
  d: path("M5.232 11.027a1 1 0 0 1 1.408-.129l4 3.334a1 1 0 1 1-1.28 1.536l-4-3.333a1 1 0 0 1-.128-1.408");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="bz5wrnbix"/><path clip-rule="evenodd" class="ewjqafbxw"/><path clip-rule="evenodd" class="atnh38bjm"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:arrow-down-off",
	});
}

export default Component;
