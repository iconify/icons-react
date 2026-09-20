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
		"content": `<style>.kxcw7ob4v {
  fill: currentColor;
  d: path("M7 18V2h8.5L20 6.5V18zm8-11h4l-4-4zM3 22V8h1v13h10v1z");
}
</style><path class="kxcw7ob4v"/>`,
		"fallback": "material-symbols-light:file-copy-sharp",
	});
}

export default Component;
