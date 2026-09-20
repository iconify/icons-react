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
		"content": `<style>.w8jrvabhe {
  fill: currentColor;
  d: path("m8.401 16.333l-.734-.727L11.266 12L7.667 8.42l.734-.728L12 11.29l3.574-3.597l.734.727L12.709 12l3.599 3.606l-.734.727L12 12.737z");
}
</style><path class="w8jrvabhe"/>`,
		"fallback": "material-symbols-light:close-small",
	});
}

export default Component;
