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
		"content": `<style>.kgj208d6t {
  fill: currentColor;
  d: path("M2 4.25C2 3.56 2.56 3 3.25 3h13.5c.69 0 1.25.56 1.25 1.25v1.5C18 6.44 17.44 7 16.75 7H3.25C2.56 7 2 6.44 2 5.75zM3 8h14v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm5.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z");
}
</style><path class="kgj208d6t"/>`,
		"fallback": "fluent:archive-20-filled",
	});
}

export default Component;
