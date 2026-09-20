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
		"content": `<style>.npsme3b2f {
  fill: currentColor;
  d: path("M10 8a6 6 0 0 1 12 0c0 3.523-1.986 8.536-3.16 11.19C18.346 20.31 17.227 21 16 21s-2.345-.69-2.84-1.81C11.985 16.536 10 11.522 10 8m6 22a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7");
}
</style><path class="npsme3b2f"/>`,
		"fallback": "fluent:important-32-filled",
	});
}

export default Component;
