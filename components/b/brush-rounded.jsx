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
		"content": `<style>.unga9os_y {
  fill: currentColor;
  d: path("M6.385 19.616q-.587 0-1.168-.204q-.58-.204-1.025-.566q.496-.327.844-.878t.349-1.352q0-.847.577-1.424q.577-.576 1.423-.576t1.423.576t.577 1.424q0 1.246-.877 2.123t-2.123.877M11.25 14.5l-1.711-1.711l8.18-8.181q.275-.275.688-.288t.712.288l.312.311q.3.3.3.7t-.3.7z");
}
</style><path class="unga9os_y"/>`,
		"fallback": "material-symbols-light:brush-rounded",
	});
}

export default Component;
