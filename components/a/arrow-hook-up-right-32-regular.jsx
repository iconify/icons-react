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
		"content": `<style>.ptcd1wwfk {
  fill: currentColor;
  d: path("M19.293 6.293a1 1 0 0 1 1.338-.068l.076.068l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L22.586 13H13a5 5 0 0 0-.257 9.993L13 23h9a1 1 0 1 1 0 2h-9l-.36-.009A7 7 0 0 1 13 11h9.586l-3.293-3.293l-.068-.076a1 1 0 0 1 .068-1.338");
}
</style><path class="ptcd1wwfk"/>`,
		"fallback": "fluent:arrow-hook-up-right-32-regular",
	});
}

export default Component;
