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
		"content": `<style>.dv77gccpo {
  fill: currentColor;
  d: path("M1 18V6h17.05l-1.6 2H3v8h12.825l-.375 2zm2-2V8zm14.675 1l.7-4H15l4.8-6h.525l-.7 4H23l-4.8 6z");
}
</style><path class="dv77gccpo"/>`,
		"fallback": "material-symbols:battery-android-bolt-outline-sharp",
	});
}

export default Component;
