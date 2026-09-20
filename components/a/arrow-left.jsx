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
		"content": `<style>.ff9cpzbqy {
  d: path("M8.974 5.232a1 1 0 0 1 .128 1.408l-3.334 4a1 1 0 1 1-1.536-1.28l3.333-4a1 1 0 0 1 1.409-.128");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.wc9cnwkrl {
  d: path("M8.974 14.768a1 1 0 0 1-1.409-.128l-3.333-4a1 1 0 1 1 1.536-1.28l3.334 4a1 1 0 0 1-.128 1.408");
}

.zk4d2l8to {
  d: path("M6 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="wc9cnwkrl"/><path class="ff9cpzbqy"/><path class="zk4d2l8to"/></g>`,
		"fallback": "pepicons-pop:arrow-left",
	});
}

export default Component;
