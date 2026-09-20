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
		"content": `<style>.htofd9bcd {
  fill: currentColor;
  d: path("m20.9 21l-.159.794A1.5 1.5 0 0 1 19.271 23h-.541a1.5 1.5 0 0 1-1.471-1.206l-.16-.794zM10 4c.768 0 1.47.289 2 .764A3 3 0 0 1 14 4h6a2 2 0 0 1 2 2v6a5 5 0 0 0-2-.9V6h-6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h.418c.324.74.82 1.385 1.438 1.886l.024.114H14c-.768 0-1.47-.289-2-.764A3 3 0 0 1 10 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm9 8a4 4 0 0 1 2.236 7.316L21.1 20h-4.2l-.136-.684A4 4 0 0 1 19 12M4 18h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4z");
}
</style><path class="htofd9bcd"/>`,
		"fallback": "fluent:book-open-lightbulb-24-filled",
	});
}

export default Component;
