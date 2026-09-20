import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r97m_s6ga {
  fill: currentColor;
  d: path("M1.25 10.5a.75.75 0 0 1 .75.75c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 0 1 0 1.5h-.5A2.75 2.75 0 0 1 .5 11.25a.75.75 0 0 1 .75-.75m13.5 0a.75.75 0 0 1 .75.75A2.75 2.75 0 0 1 12.75 14h-.5a.75.75 0 0 1 0-1.5h.5c.69 0 1.25-.56 1.25-1.25a.75.75 0 0 1 .75-.75m-11-6a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75m2.75 0a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75m3 0a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75m2.75 0a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75M3.75 2a.75.75 0 0 1 0 1.5h-.5C2.56 3.5 2 4.06 2 4.75a.75.75 0 0 1-1.5 0A2.75 2.75 0 0 1 3.25 2zm9 0a2.75 2.75 0 0 1 2.75 2.75a.75.75 0 0 1-1.5 0c0-.69-.56-1.25-1.25-1.25h-.5a.75.75 0 0 1 0-1.5z");
}
</style><path class="r97m_s6ga"/>`,
		"fallback": "fluent:barcode-scanner-16-filled",
	});
}

export default Component;
