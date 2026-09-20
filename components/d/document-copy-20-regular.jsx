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
		"content": `<style>.lsj1mhbia {
  fill: currentColor;
  d: path("M6 4a2 2 0 0 1 2-2h3.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 17 7.414V14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 11 6.5V3zm4 .207V6.5a.5.5 0 0 0 .5.5h3.293zM4 5a1 1 0 0 1 1-1v10a3 3 0 0 0 3 3h7a1 1 0 0 1-1 1H7.94A3.94 3.94 0 0 1 4 14.06z");
}
</style><path class="lsj1mhbia"/>`,
		"fallback": "fluent:document-copy-20-regular",
	});
}

export default Component;
