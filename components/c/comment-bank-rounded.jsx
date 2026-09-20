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
		"content": `<style>.tm19hljcx {
  fill: currentColor;
  d: path("m6 18l-2.3 2.3q-.475.475-1.088.213T2 19.575V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm6.5-14v6.125q0 .3.25.438t.5-.013l1.375-.825q.2-.125.375-.125t.375.125l1.375.825q.25.15.5.013t.25-.438V4z");
}
</style><path class="tm19hljcx"/>`,
		"fallback": "material-symbols:comment-bank-rounded",
	});
}

export default Component;
