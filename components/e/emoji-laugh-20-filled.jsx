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
		"content": `<style>.g0ct-bcyo {
  fill: currentColor;
  d: path("M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16M6.494 8.075a.5.5 0 1 1-.988-.15C5.633 7.09 6.392 6.5 7.248 6.5s1.615.59 1.742 1.425a.5.5 0 1 1-.988.15c-.045-.295-.339-.575-.754-.575s-.709.28-.754.575m5.5 0a.5.5 0 0 1-.988-.15c.127-.835.886-1.425 1.742-1.425s1.615.59 1.742 1.425a.5.5 0 0 1-.988.15c-.046-.295-.339-.575-.754-.575s-.708.28-.754.575M5.495 10.5h9c-.215 2.2-1.929 4-4.5 4s-4.285-1.8-4.5-4");
}
</style><path class="g0ct-bcyo"/>`,
		"fallback": "fluent:emoji-laugh-20-filled",
	});
}

export default Component;
