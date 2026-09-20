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
		"content": `<style>.pyu_43zvz {
  fill: currentColor;
  d: path("M7 18V2h8.5L20 6.5V18zm8-11V3H8v14h11V7zM3 22V8h1v13h10v1zM8 3v4zv14z");
}
</style><path class="pyu_43zvz"/>`,
		"fallback": "material-symbols-light:file-copy-outline-sharp",
	});
}

export default Component;
