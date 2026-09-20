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
		"content": `<style>.li_h84gwk {
  fill: currentColor;
  d: path("M8.07 5.47a6.746 6.746 0 0 1 4.492 11.508l-.792.792a2.5 2.5 0 0 1-3.536 0l-6.003-6.003a2.5 2.5 0 0 1-.002-3.534l.793-.794a6.8 6.8 0 0 1 1.595-1.182a8 8 0 0 0-.147 1.265q-.391.277-.74.624l-.793.794a1.5 1.5 0 0 0 .001 2.12l6.003 6.002a1.5 1.5 0 0 0 2.121 0l.792-.79l.204-.215a5.746 5.746 0 0 0-4.407-9.59q.15-.518.418-.996m.164-3.242a2.5 2.5 0 0 1 3.534.002l6.002 6.003c.977.977.976 2.56 0 3.537l-.791.792a6.8 6.8 0 0 1-1.594 1.182a8 8 0 0 0 .147-1.267q.39-.275.74-.623l.791-.792a1.5 1.5 0 0 0 0-2.122L11.06 2.937a1.5 1.5 0 0 0-2.119 0l-.795.792a5.747 5.747 0 0 0 0 8.125a5.73 5.73 0 0 0 4.204 1.68c-.1.343-.24.678-.418.996A6.746 6.746 0 0 1 7.44 3.022z");
}
</style><path class="li_h84gwk"/>`,
		"fallback": "fluent:diamond-link-20-regular",
	});
}

export default Component;
