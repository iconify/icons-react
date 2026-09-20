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
		"content": `<style>.dxmxd-hhb {
  fill: currentColor;
  d: path("M14 10a2 2 0 0 0 2 2h7.999l.001.078V23.6a2.4 2.4 0 0 1-2.4 2.4H6.4A2.4 2.4 0 0 1 4 23.6V20h8.25a1.75 1.75 0 1 0 0-3.5H4V4.4A2.4 2.4 0 0 1 6.4 2H14zM9.25 21a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm3-3.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5zm-3-3.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zM15.5 2.475q.139.104.264.228l7.43 7.43q.171.172.308.367H16a.5.5 0 0 1-.5-.5z");
}
</style><path class="dxmxd-hhb"/>`,
		"fallback": "fluent:document-text-extract-28-filled",
	});
}

export default Component;
