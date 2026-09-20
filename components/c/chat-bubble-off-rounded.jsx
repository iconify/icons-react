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
		"content": `<style>.d_6ga7y3o {
  fill: currentColor;
  d: path("M22 4v12.725q0 .675-.612.938T20.3 17.45L6.55 3.7q-.475-.475-.212-1.088T7.275 2H20q.825 0 1.413.588T22 4M6 18l-2.3 2.3q-.475.475-1.088.213T2 19.575V4.8l-.6-.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l18.4 18.4q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275L15.15 18z");
}
</style><path class="d_6ga7y3o"/>`,
		"fallback": "material-symbols:chat-bubble-off-rounded",
	});
}

export default Component;
