import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w50mx-d7f {
  fill: currentColor;
  d: path("M8.5 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m.303 2.5c-1.274 0-2.52.377-3.58 1.084a.5.5 0 0 0 .554.832A5.45 5.45 0 0 1 12.803 13h.797a.5.5 0 0 0 0-1zM2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m8-7a7 7 0 1 0 0 14a7 7 0 0 0 0-14");
}
</style><path class="w50mx-d7f"/>`,
		"fallback": "fluent:emoji-sad-slight-20-regular",
	});
}

export default Component;
