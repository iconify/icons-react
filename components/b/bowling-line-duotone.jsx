import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ituo-kbtq {
  d: path("M8 8C8.82843 8 9.5 8.67157 9.5 9.5C9.5 10.3284 8.82843 11 8 11C7.17157 11 6.5 10.3284 6.5 9.5C6.5 8.67157 7.17157 8 8 8Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.o7l51rbax {
  cx: 12px;
  cy: 12px;
  r: 1.5px;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.q5a2teajs {
  cx: 12px;
  cy: 7px;
  r: 1.5px;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.shu3xdl9q {
  cx: 12px;
  cy: 12px;
  r: 10px;
}
</style><g class="ipq1z-bjh"><circle class="shu3xdl9q"/><circle class="q5a2teajs"/><circle class="o7l51rbax"/><path class="ituo-kbtq"/></g>`,
		"fallback": "solar:bowling-line-duotone",
	});
}

export default Component;
