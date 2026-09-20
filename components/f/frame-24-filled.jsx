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
		"content": `<style>.a_p37dznd {
  fill: currentColor;
  d: path("M5.25 2a.75.75 0 0 1 .75.75V4.5h12V2.75a.75.75 0 0 1 1.5 0V4.5h1.75a.75.75 0 0 1 0 1.5H19.5v12h1.75a.75.75 0 0 1 0 1.5H19.5v1.75a.75.75 0 0 1-1.5 0V19.5H6v1.75a.75.75 0 0 1-1.5 0V19.5H2.75a.75.75 0 0 1 0-1.5H4.5V6H2.75a.75.75 0 0 1 0-1.5H4.5V2.75A.75.75 0 0 1 5.25 2");
}
</style><path class="a_p37dznd"/>`,
		"fallback": "fluent:frame-24-filled",
	});
}

export default Component;
