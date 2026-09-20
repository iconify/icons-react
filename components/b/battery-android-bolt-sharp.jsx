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
		"content": `<style>.dttm6ha1l {
  fill: currentColor;
  d: path("M1 18V6h17.05l-7.2 9H16l-.55 3zm16.675-1l.7-4H15l4.8-6h.525l-.7 4H23l-4.8 6z");
}
</style><path class="dttm6ha1l"/>`,
		"fallback": "material-symbols:battery-android-bolt-sharp",
	});
}

export default Component;
