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
		"content": `<style>.q-qw0h3ch {
  fill: currentColor;
  d: path("M10.5 2.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zM10 6a4 4 0 1 1 0 8a4 4 0 0 1 0-8m3 4a3 3 0 0 0-3-3v6a3 3 0 0 0 3-3m5 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5m-7.5 6.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zM4 10a.5.5 0 0 1-.5.5H2.463a.5.5 0 0 1 0-1H3.5a.5.5 0 0 1 .5.5m.854-5.854a.5.5 0 1 0-.708.708l1 1a.5.5 0 1 0 .708-.708zm-.708 11.708a.5.5 0 0 0 .708 0l1-1a.5.5 0 0 0-.708-.708l-1 1a.5.5 0 0 0 0 .708m11-11.708a.5.5 0 0 1 .708.708l-1 1a.5.5 0 0 1-.708-.708zm.708 11.708a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l1 1a.5.5 0 0 1 0 .708");
}
</style><path class="q-qw0h3ch"/>`,
		"fallback": "fluent:brightness-high-20-filled",
	});
}

export default Component;
