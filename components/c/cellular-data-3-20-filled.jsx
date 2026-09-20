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
		"content": `<style>.psp7y4b2g {
  fill: currentColor;
  d: path("M4.75 12a.75.75 0 0 1 .742.64l.008.11v2.496a.75.75 0 0 1-1.492.11L4 15.246V12.75a.75.75 0 0 1 .75-.75m3-2a.75.75 0 0 1 .742.64l.008.11v4.496a.75.75 0 0 1-1.492.11L7 15.246V10.75a.75.75 0 0 1 .75-.75m3-2a.75.75 0 0 1 .742.64l.008.11v6.5a.75.75 0 0 1-1.492.11L10 15.25v-6.5a.75.75 0 0 1 .75-.75");
}
</style><path class="psp7y4b2g"/>`,
		"fallback": "fluent:cellular-data-3-20-filled",
	});
}

export default Component;
