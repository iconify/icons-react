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
		"content": `<style>.s15-9-g5u {
  fill: currentColor;
  d: path("m9.787 20.617l-7.404-7.404l6.636-6.63l-2.88-2.804l.78-.798l10.233 10.271zm-.02-13.286L3.86 13.258h11.834zM19.32 20q-.707 0-1.178-.493q-.472-.494-.472-1.207q0-.54.232-1.044t.599-.944l.82-1.004l.869 1.004q.361.44.596.944t.234 1.044q0 .714-.496 1.207T19.319 20");
}
</style><path class="s15-9-g5u"/>`,
		"fallback": "material-symbols-light:colors-outline-sharp",
	});
}

export default Component;
