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
		"content": `<style>.ii9_eccfw {
  fill: currentColor;
  d: path("M5.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m9.5 7a1 1 0 0 1-1 1H9.743q.382-.462.657-1zm-7.5-2a1 1 0 1 0 0 2a1 1 0 0 0 0-2m.35-2.854a.5.5 0 0 0-.707 0l-3.997 3.997a.5.5 0 1 0 .708.707l3.996-3.997a.5.5 0 0 0 0-.707M11 6.5A1.5 1.5 0 0 0 12.5 8H17v6.5a1.5 1.5 0 0 1-1.5 1.5h-4.707A5.5 5.5 0 0 0 6 9.022V3.5A1.5 1.5 0 0 1 7.5 2H11zM3.5 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2M5 9.022a5.5 5.5 0 0 0-1 .185V5a1 1 0 0 1 1-1zM16.75 7H12.5a.5.5 0 0 1-.5-.5V2.25z");
}
</style><path class="ii9_eccfw"/>`,
		"fallback": "fluent:document-multiple-percent-20-filled",
	});
}

export default Component;
