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
		"content": `<style>.va0e5yzee {
  fill: currentColor;
  d: path("M3 21v-3h-.975L1 7h2l.725 8H10v3H9v3H7.5v-3h-3v3zm8 0v-8H5v-2h14v2h-6v8zm4 0v-3h-1v-3h6.3l.725-8H23l-1 11h-1v3h-1.5v-3h-3v3zM7 9V8q0-1.65 1.175-2.825T11 4V1h2v3q1.65 0 2.825 1.175T17 8v1zm2.275-2h5.45q-.275-.475-.725-.737T13 6h-2q-.55 0-1 .263T9.275 7M12 7");
}
</style><path class="va0e5yzee"/>`,
		"fallback": "material-symbols:dine-lamp-outline-sharp",
	});
}

export default Component;
