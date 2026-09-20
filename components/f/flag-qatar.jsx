import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i-t-cccgt {
  fill: var(--svg-color--8d1b3d, #8d1b3d);
  d: path("M32 5H11v26h21a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4");
}

.k86n8x8hw {
  fill: var(--svg-color--eee, #eee);
  d: path("m11 28.111l5.295-1.444L11 25.222l5.295-1.444L11 22.333l5.295-1.444L11 19.444L16.295 18L11 16.556l5.295-1.444L11 13.667l5.295-1.444L11 10.778l5.295-1.445L11 7.889l5.295-1.444L11 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h7l5.295-1.444z");
}
</style><path class="i-t-cccgt"/><path class="k86n8x8hw"/>`,
		"fallback": "twemoji:flag-qatar",
	});
}

export default Component;
