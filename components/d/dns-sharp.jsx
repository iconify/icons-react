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
		"content": `<style>.xy9dc3o-j {
  fill: currentColor;
  d: path("M7.5 9q.625 0 1.063-.437T9 7.5t-.437-1.062T7.5 6t-1.062.438T6 7.5t.438 1.063T7.5 9m0 10q.625 0 1.063-.437T9 17.5t-.437-1.062T7.5 16t-1.062.438T6 17.5t.438 1.063T7.5 19M3 12V3h18v9zm0 10v-9h18v9z");
}
</style><path class="xy9dc3o-j"/>`,
		"fallback": "material-symbols:dns-sharp",
	});
}

export default Component;
