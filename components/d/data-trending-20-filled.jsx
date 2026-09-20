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
		"content": `<style>.scufjxbuf {
  fill: currentColor;
  d: path("M2.75 2a.75.75 0 0 1 .75.75v12.5c0 .69.56 1.25 1.25 1.25h12.5a.75.75 0 0 1 0 1.5H4.75A2.75 2.75 0 0 1 2 15.25V2.75A.75.75 0 0 1 2.75 2M12 5.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V7.56l-3.97 3.97a.75.75 0 0 1-1.06 0L9 10.06l-2.22 2.22a.75.75 0 0 1-1.06-1.06l2.75-2.75a.75.75 0 0 1 1.06 0L11 9.94l3.44-3.44h-1.69a.75.75 0 0 1-.75-.75");
}
</style><path class="scufjxbuf"/>`,
		"fallback": "fluent:data-trending-20-filled",
	});
}

export default Component;
