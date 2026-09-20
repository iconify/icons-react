import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kx9utm-gh {
  fill: currentColor;
  d: path("M13 21.25A2.75 2.75 0 0 1 10.25 24h-5.5A2.75 2.75 0 0 1 2 21.25V13h11zM20.75 6.5a2.75 2.75 0 0 1 2.75 2.75v14a.75.75 0 0 1-1.5 0V11.5H2V9.25A2.75 2.75 0 0 1 4.75 6.5zm.002-2.5c2.9 0 5.25 2.35 5.25 5.25v11.5a.75.75 0 0 1-1.5 0V9.25a3.75 3.75 0 0 0-3.75-3.75H4.805A2.75 2.75 0 0 1 7.252 4zM5.75 15.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="kx9utm-gh"/>`,
		"fallback": "fluent:desk-multiple-28-filled",
	});
}

export default Component;
