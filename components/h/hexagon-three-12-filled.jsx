import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g3hthybnf {
  fill: currentColor;
  d: path("M2.715 1.998A1 1 0 0 1 3.58 1.5h1.164a1 1 0 0 1 .865.498l.58 1a1 1 0 0 1 0 1.004l-.58 1a1 1 0 0 1-.865.498H3.58a1 1 0 0 1-.865-.498l-.58-1a1 1 0 0 1 0-1.004zm4.33 2.5A1 1 0 0 1 7.91 4h1.164a1 1 0 0 1 .865.498l.58 1a1 1 0 0 1 0 1.004l-.58 1A1 1 0 0 1 9.074 8H7.91a1 1 0 0 1-.865-.498l-.58-1a1 1 0 0 1 0-1.004zM3.58 6.5a1 1 0 0 0-.865.498l-.58 1a1 1 0 0 0 0 1.004l.58 1a1 1 0 0 0 .865.498h1.164a1 1 0 0 0 .865-.498l.58-1a1 1 0 0 0 0-1.004l-.58-1a1 1 0 0 0-.865-.498z");
}
</style><path class="g3hthybnf"/>`,
		"fallback": "fluent:hexagon-three-12-filled",
	});
}

export default Component;
