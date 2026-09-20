import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vfp3g8bwm {
  fill: currentColor;
  d: path("M16 2H8.25A3.25 3.25 0 0 0 5 5.25v21.5A3.25 3.25 0 0 0 8.25 30h15.5A3.25 3.25 0 0 0 27 26.75V13h-7.75A3.25 3.25 0 0 1 16 9.75zm10.863 9a3.25 3.25 0 0 0-.815-1.366l-6.682-6.682A3.25 3.25 0 0 0 18 2.136V9.75c0 .69.56 1.25 1.25 1.25z");
}
</style><path class="vfp3g8bwm"/>`,
		"fallback": "fluent:document-32-filled",
	});
}

export default Component;
