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
		"content": `<style>.kc-a5__eb {
  fill: currentColor;
  d: path("M12.25 17.5a.75.75 0 0 0 0-1.5H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6.25a.75.75 0 0 0 0-1.5H6A3.5 3.5 0 0 0 2.5 6v8A3.5 3.5 0 0 0 6 17.5zm1.491-11.301a.75.75 0 0 1 1.06.042l3 3.25a.75.75 0 0 1 0 1.018l-3 3.25A.75.75 0 1 1 13.7 12.74l1.838-1.991H7.75a.75.75 0 0 1 0-1.5h7.787l-1.838-1.991a.75.75 0 0 1 .042-1.06");
}
</style><path class="kc-a5__eb"/>`,
		"fallback": "fluent:arrow-exit-20-filled",
	});
}

export default Component;
