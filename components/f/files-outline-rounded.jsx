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
		"content": `<style>.wmksqvbdt {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18V8q0-.825.588-1.412T4 6h6l2-2h8q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm1.825-7H11V7.825zM4 12l4-4H4zm0 3v3h16V6h-7v7q0 .825-.587 1.413T11 15zm7-4");
}
</style><path class="wmksqvbdt"/>`,
		"fallback": "material-symbols:files-outline-rounded",
	});
}

export default Component;
