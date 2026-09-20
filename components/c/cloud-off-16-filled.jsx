import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p14499bql {
  fill: currentColor;
  d: path("m12.254 12.961l1.892 1.893a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708L4.45 5.156c-.215.414-.36.87-.419 1.351A3.25 3.25 0 0 0 4.25 13h7.5q.257 0 .504-.039M15 9.75c0 .867-.34 1.654-.892 2.237l-8.32-8.32a4 4 0 0 1 6.182 2.84A3.25 3.25 0 0 1 15 9.75");
}
</style><path class="p14499bql"/>`,
		"fallback": "fluent:cloud-off-16-filled",
	});
}

export default Component;
