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
		"content": `<style>.wnq2rvb4r {
  fill: currentColor;
  d: path("M9.408 1.29a.75.75 0 0 1 1.184 0l1.063 1.367a.5.5 0 0 0 .583.157l1.604-.653a.75.75 0 0 1 1.025.592l.237 1.716a.5.5 0 0 0 .427.427l1.716.237a.75.75 0 0 1 .592 1.025l-.653 1.604a.5.5 0 0 0 .157.583l1.366 1.063a.75.75 0 0 1 0 1.185l-1.366 1.063a.5.5 0 0 0-.157.583l.653 1.604a.75.75 0 0 1-.592 1.025l-1.716.237a.5.5 0 0 0-.427.427l-.237 1.716a.75.75 0 0 1-1.025.592l-1.604-.653a.5.5 0 0 0-.583.157l-1.063 1.366a.75.75 0 0 1-1.184 0l-1.064-1.366a.5.5 0 0 0-.583-.157l-1.604.653a.75.75 0 0 1-1.025-.592l-.237-1.716a.5.5 0 0 0-.427-.427l-1.716-.237a.75.75 0 0 1-.592-1.025l.653-1.604a.5.5 0 0 0-.157-.583L1.29 10.592a.75.75 0 0 1 0-1.184l1.366-1.063a.5.5 0 0 0 .157-.583L2.16 6.158a.75.75 0 0 1 .592-1.025l1.716-.237a.5.5 0 0 0 .427-.427l.237-1.716a.75.75 0 0 1 1.025-.592l1.604.653a.5.5 0 0 0 .583-.157zM6.5 9.5a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3a.5.5 0 0 0-1 0v3z");
}
</style><path class="wnq2rvb4r"/>`,
		"fallback": "fluent:add-starburst-20-filled",
	});
}

export default Component;
