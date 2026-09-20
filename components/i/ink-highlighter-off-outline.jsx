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
		"content": `<style>.bzavuab4w {
  fill: currentColor;
  d: path("m15.773 12.935l-.707-.714l4.184-4.179q.173-.173.173-.442t-.173-.442l-1.716-1.716q-.172-.173-.442-.173t-.442.173l-4.184 4.185l-.708-.713l4.204-4.198q.484-.485 1.13-.485q.647 0 1.131.485l1.754 1.753q.485.485.485 1.131t-.485 1.13zm3.989 8.242l-6.116-6.115l-4.223 4.223q-.484.484-1.13.484q-.647 0-1.131-.484l-.204-.204l-1.15 1.15h-2.77l2.535-2.535l-.165-.165q-.485-.485-.485-1.131t.485-1.13l4.223-4.224L2.823 4.24l.714-.714l16.938 16.938zM6.115 16.823l1.753 1.754q.173.173.423.173t.424-.173l4.223-4.223l-2.6-2.6l-4.223 4.223q-.174.173-.174.423t.174.423m5.523-3.77");
}
</style><path class="bzavuab4w"/>`,
		"fallback": "material-symbols-light:ink-highlighter-off-outline",
	});
}

export default Component;
