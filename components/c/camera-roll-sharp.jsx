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
		"content": `<style>.e-87fd4qu {
  fill: currentColor;
  d: path("M2 22V3h3V1h6v2h3v2h8v15h-8v2zm7-5h2v-2H9zm0-7h2V8H9zm4 7h2v-2h-2zm0-7h2V8h-2zm4 7h2v-2h-2zm0-7h2V8h-2z");
}
</style><path class="e-87fd4qu"/>`,
		"fallback": "material-symbols:camera-roll-sharp",
	});
}

export default Component;
