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
		"content": `<style>.uxuoqvbzf {
  fill: currentColor;
  d: path("M2.44 11.2a1.5 1.5 0 0 0 0 2.122l4.242 4.242a1.5 1.5 0 0 0 2.121 0l2.212-2.212a4.1 4.1 0 0 1 .182-1.596l-.703.704l-4.95-4.95l6.364-6.364a.5.5 0 0 1 .707 0l4.242 4.243a.5.5 0 0 1 0 .707l-3.1 3.101a4 4 0 0 1 1.595-.182l2.212-2.212a1.5 1.5 0 0 0 0-2.121l-4.242-4.243a1.5 1.5 0 0 0-2.122 0zm.706 1.415a.5.5 0 0 1 0-.707l1.69-1.69l4.95 4.95l-1.69 1.69a.5.5 0 0 1-.707 0zM15 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6");
}
</style><path class="uxuoqvbzf"/>`,
		"fallback": "fluent:eraser-small-20-regular",
	});
}

export default Component;
