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

.mwyb9cv3b {
  width: 16px;
  height: 8px;
  x: 2px;
  y: 6px;
  rx: 4px;
}

.w-0i0z5mu {
  width: 9px;
  height: 8px;
  x: 6px;
  y: 3px;
  rx: 4px;
}
</style><g class="cuyn6tgcc"><rect class="mwyb9cv3b"/><rect class="w-0i0z5mu"/><rect class="mwyb9cv3b"/><rect class="w-0i0z5mu"/></g>`,
		"fallback": "pepicons-pop:cloud-filled",
	});
}

export default Component;
