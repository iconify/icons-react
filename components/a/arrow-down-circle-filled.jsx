import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bd9gczbnq {
  cx: 13px;
  cy: 13px;
  r: 13px;
  fill: currentColor;
}

.ft5dv1b6b {
  fill: none;
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.kvddbzdha {
  d: path("M17.768 14.027a1 1 0 0 1-.128 1.408l-4 3.333a1 1 0 0 1-1.28-1.536l4-3.334a1 1 0 0 1 1.408.129");
}

.kvn14gsjy {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
}

.oml4dqbmk {
  d: path("M13 17a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1");
}

.wgfmlvbwg {
  d: path("M8.232 14.027a1 1 0 0 1 1.408-.129l4 3.334a1 1 0 1 1-1.28 1.536l-4-3.333a1 1 0 0 1-.128-1.408");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGLvCMfelJ"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="kvddbzdha"/><path class="wgfmlvbwg"/><path class="oml4dqbmk"/></g></mask></defs><circle mask="url(#SVGLvCMfelJ)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:arrow-down-circle-filled",
	});
}

export default Component;
