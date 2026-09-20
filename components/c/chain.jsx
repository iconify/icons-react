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
		"content": `<style>.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.q0enigkep {
  d: path("M5.444 15.503a2 2 0 0 1-.587-2.767l2.181-3.353a2 2 0 1 1 3.353 2.18l-2.18 3.354a2 2 0 0 1-2.767.586m-2.442.202a4 4 0 0 1 .179-4.06l2.18-3.352a4 4 0 1 1 6.707 4.361l-2.18 3.353a4 4 0 0 1-6.886-.302");
}

.tqbhefbpm {
  d: path("M10.392 11.564a2 2 0 0 1-.587-2.767l2.181-3.353a2 2 0 1 1 3.353 2.18l-2.18 3.354a2 2 0 0 1-2.767.586m-2.442.202a4 4 0 0 1 .179-4.06l2.18-3.353a4 4 0 1 1 6.707 4.362l-2.18 3.353a4 4 0 0 1-6.886-.302");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="tqbhefbpm"/><path class="q0enigkep"/></g>`,
		"fallback": "pepicons-pop:chain",
	});
}

export default Component;
