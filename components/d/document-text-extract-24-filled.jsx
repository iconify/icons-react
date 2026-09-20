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
		"content": `<style>.iuagg_cyv {
  fill: currentColor;
  d: path("M12 8V2H6a2 2 0 0 0-2 2v9.5h6.5a2 2 0 1 1 0 4H4V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2m-4.5 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75m0 7.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75M13.5 8V2.5l6 6H14a.5.5 0 0 1-.5-.5M2.75 14.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="iuagg_cyv"/>`,
		"fallback": "fluent:document-text-extract-24-filled",
	});
}

export default Component;
