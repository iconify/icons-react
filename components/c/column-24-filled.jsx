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
		"content": `<style>.njdshg_ae {
  fill: currentColor;
  d: path("M2.5 3.75A.75.75 0 0 1 3.25 3h.5A2.75 2.75 0 0 1 6.5 5.75v12.5A2.75 2.75 0 0 1 3.75 21h-.5a.75.75 0 0 1 0-1.5h.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25h-.5a.75.75 0 0 1-.75-.75M10.75 3A2.75 2.75 0 0 0 8 5.75v12.5A2.75 2.75 0 0 0 10.75 21h2.5A2.75 2.75 0 0 0 16 18.25V5.75A2.75 2.75 0 0 0 13.25 3zm10 0a.75.75 0 0 1 0 1.5h-.5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 0 1 0 1.5h-.5a2.75 2.75 0 0 1-2.75-2.75V5.75A2.75 2.75 0 0 1 20.25 3z");
}
</style><path class="njdshg_ae"/>`,
		"fallback": "fluent:column-24-filled",
	});
}

export default Component;
