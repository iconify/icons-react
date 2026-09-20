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
		"content": `<style>.uwg9j8brl {
  fill: currentColor;
  d: path("M17 5h-.5A1.5 1.5 0 0 0 15 6.5v5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 22.5 5H22V4a2.5 2.5 0 0 0-5 0zm1.5-1a1 1 0 1 1 2 0v1h-2zm2 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-7.502-2.997h1.051Q14 6.244 14 6.5v5a2.5 2.5 0 0 0 2.5 2.5h5.495v6.249a1.75 1.75 0 0 1-1.75 1.75h-7.247q-.13 0-.256-.019V6.022q.125-.018.256-.019m3.24 11.497h-1.5l-.101.007a.75.75 0 0 0 0 1.486l.102.007h1.5l.101-.007a.75.75 0 0 0 0-1.486zM10.999 6q.125 0 .245.017V21.98a2 2 0 0 1-.245.017H3.75A1.75 1.75 0 0 1 2 20.246V7.751c0-.967.784-1.75 1.75-1.75zM9.243 17.5H7.74l-.102.007a.75.75 0 0 0 0 1.486L7.74 19h1.502l.102-.007a.75.75 0 0 0 0-1.486z");
}
</style><path class="uwg9j8brl"/>`,
		"fallback": "fluent:dual-screen-lock-24-filled",
	});
}

export default Component;
