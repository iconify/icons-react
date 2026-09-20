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
		"content": `<style>.mtl2zshga {
  fill: currentColor;
  d: path("m14.089 11.264l-.714-.714L16.95 6H8.825l-1-1h10.156q.317 0 .467.28t-.052.55zm5.744 9.99L13 14.42v3.81q0 .328-.22.549t-.55.22h-.46q-.33 0-.55-.22t-.22-.55V12.42L2.746 4.167l.708-.713l17.092 17.092zM13.375 10.55");
}
</style><path class="mtl2zshga"/>`,
		"fallback": "material-symbols-light:filter-alt-off-outline",
	});
}

export default Component;
