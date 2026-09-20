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
		"content": `<style>.w1il04biu {
  fill: currentColor;
  d: path("M10 2a8 8 0 1 1-3.613 15.14l-.121-.065l-3.645.91a.5.5 0 0 1-.62-.441v-.081l.014-.084l.91-3.644l-.064-.12C2.288 12.485 2.028 11.257 2 10a8 8 0 0 1 8-8m-2.5 8A1.5 1.5 0 0 0 6 11.5c0 1.116.459 2.01 1.212 2.615C7.953 14.71 8.947 15 10 15s2.047-.29 2.788-.885C13.541 13.511 14 12.616 14 11.5a1.5 1.5 0 0 0-1.5-1.5zM10 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4");
}
</style><path class="w1il04biu"/>`,
		"fallback": "fluent:chat-person-20-filled",
	});
}

export default Component;
