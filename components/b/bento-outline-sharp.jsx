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
		"content": `<style>.ap0fhm_ws {
  fill: currentColor;
  d: path("M2 19V5h20v14zm12-8h6V7h-6zM4 17h8V7H4zm4-3.5q-.625 0-1.062-.437T6.5 12t.438-1.062T8 10.5t1.063.438T9.5 12t-.437 1.063T8 13.5m6 3.5h6v-4h-6z");
}
</style><path class="ap0fhm_ws"/>`,
		"fallback": "material-symbols:bento-outline-sharp",
	});
}

export default Component;
