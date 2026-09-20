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
		"content": `<style>.l7-qwb5gj {
  fill: currentColor;
  d: path("M16.712 18h4.673v1H15.71zM4.558 19l-1.414-1.413q-.478-.48-.491-1.137t.466-1.161L13.273 4.733q.479-.503 1.134-.494t1.134.489l4.09 4.09q.479.479.488 1.146q.01.668-.469 1.146L11.962 19z");
}
</style><path class="l7-qwb5gj"/>`,
		"fallback": "material-symbols-light:ink-eraser",
	});
}

export default Component;
