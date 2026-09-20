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
		"content": `<style>.zrio02uwi {
  fill: currentColor;
  d: path("m11 21.725l-8-4.6V13h5v3h3zM3 11V6.875l8-4.6V8H8v3zm7 3v-4h4v4zm3 7.725V16h3v-3h5v4.125zM16 11V8h-3V2.275l8 4.6V11z");
}
</style><path class="zrio02uwi"/>`,
		"fallback": "material-symbols:borg-sharp",
	});
}

export default Component;
