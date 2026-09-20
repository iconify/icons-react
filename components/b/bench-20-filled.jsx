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
		"content": `<style>.nw-w33bha {
  fill: currentColor;
  d: path("M5 4a2 2 0 0 0-2 2v4h14V6a2 2 0 0 0-2-2zm-2.5 7a1.5 1.5 0 0 0 0 3H3v1.5a.5.5 0 0 0 1 0V14h12v1.5a.5.5 0 0 0 1 0V14h.5a1.5 1.5 0 0 0 0-3z");
}
</style><path class="nw-w33bha"/>`,
		"fallback": "fluent:bench-20-filled",
	});
}

export default Component;
