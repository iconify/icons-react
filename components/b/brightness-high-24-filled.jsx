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
		"content": `<style>.dih0xwbok {
  fill: currentColor;
  d: path("M12.75 2.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zM17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0m-1.5 0A3.5 3.5 0 0 0 12 8.5v7a3.5 3.5 0 0 0 3.5-3.5m6.5 0a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 22 12m-9.25 7.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zM5 12a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 12m.28-7.78a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06zM4.22 19.78a.75.75 0 0 0 1.06 0l1.5-1.5a.75.75 0 0 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06m14.5-15.56a.75.75 0 1 1 1.06 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06zm1.06 15.56a.75.75 0 0 1-1.06 0l-1.5-1.5a.75.75 0 0 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06");
}
</style><path class="dih0xwbok"/>`,
		"fallback": "fluent:brightness-high-24-filled",
	});
}

export default Component;
