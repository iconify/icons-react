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

.ilr5o7bbz {
  width: 2px;
  height: 16px;
  x: 4px;
  y: 2px;
  rx: 1px;
}

.uafdunbzf {
  fill-rule: evenodd;
  d: path("m6.804 2.632l-.637.264A3.51 3.51 0 0 0 4 6.137v4.386a1.46 1.46 0 0 0 2.167 1.276l.227-.126a4 4 0 0 1 3.88 0l.453.251a4 4 0 0 0 3.88 0l.734-.407A3.22 3.22 0 0 0 17 8.7V4.638a1.605 1.605 0 0 0-2.07-1.534l-.893.272a4 4 0 0 1-2.693-.131l-1.482-.613a4 4 0 0 0-3.058 0m4.893 7.543l-.454-.251A6 6 0 0 0 6 9.644V6.136c0-.61.368-1.16.931-1.393l.638-.263a2 2 0 0 1 1.529 0l1.481.612a6 6 0 0 0 4.04.196L15 5.173V8.7c0 .444-.241.853-.63 1.068l-.733.407a2 2 0 0 1-1.94 0");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="uafdunbzf"/><rect class="ilr5o7bbz"/></g>`,
		"fallback": "pepicons-pop:flag",
	});
}

export default Component;
