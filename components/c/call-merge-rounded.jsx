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
		"content": `<style>.m0idupbkr {
  fill: currentColor;
  d: path("M6.425 18.6q0-.425.275-.7l4.3-4.3V6.875L9.125 8.75q-.3.3-.7.3t-.7-.3t-.3-.712t.3-.713l3.575-3.6q.15-.15.325-.213T12 3.45t.375.062t.325.213l3.625 3.625q.3.3.3.7t-.3.7t-.712.3t-.713-.3L13 6.875v6.7q0 .4-.15.763t-.425.637L8.1 19.3q-.275.275-.7.275t-.7-.275t-.275-.7m10.875.725q-.275.275-.7.275t-.7-.275l-1.8-1.775q-.3-.3-.3-.7t.3-.7t.712-.3t.713.3l1.775 1.775q.275.275.287.688t-.287.712");
}
</style><path class="m0idupbkr"/>`,
		"fallback": "material-symbols:call-merge-rounded",
	});
}

export default Component;
