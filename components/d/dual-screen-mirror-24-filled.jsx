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
		"content": `<style>.sidiglb1l {
  fill: currentColor;
  d: path("M20.253 4.004c.966 0 1.75.784 1.75 1.75V18.25a1.75 1.75 0 0 1-1.75 1.75h-7.248q-.13 0-.255-.019V4.023q.125-.018.255-.019zm-2.081 5.411a.75.75 0 0 0-1.342 0l-2.25 4.5a.75.75 0 0 0 .67 1.086h4.5a.75.75 0 0 0 .672-1.086zm-7.167-5.413q.126 0 .246.017V19.98q-.12.017-.246.017H3.758a1.75 1.75 0 0 1-1.75-1.75V5.752c0-.967.783-1.75 1.75-1.75zM7.172 9.415a.75.75 0 0 0-1.342 0l-2.25 4.5a.75.75 0 0 0 .67 1.086h4.5a.75.75 0 0 0 .672-1.086z");
}
</style><path class="sidiglb1l"/>`,
		"fallback": "fluent:dual-screen-mirror-24-filled",
	});
}

export default Component;
