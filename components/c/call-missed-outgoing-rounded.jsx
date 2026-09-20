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
		"content": `<style>.xoxdw758q {
  fill: currentColor;
  d: path("M19 10.425L13.425 16q-.3.3-.675.45t-.75.15t-.75-.15t-.675-.45L3.7 9.125q-.275-.275-.275-.687t.275-.713q.3-.3.713-.3t.712.3L12 14.6L17.6 9H14q-.425 0-.712-.288T13 8t.288-.712T14 7h6q.425 0 .713.288T21 8v6q0 .425-.288.713T20 15t-.712-.288T19 14z");
}
</style><path class="xoxdw758q"/>`,
		"fallback": "material-symbols:call-missed-outgoing-rounded",
	});
}

export default Component;
