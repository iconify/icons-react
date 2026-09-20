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
		"content": `<style>.q2ztuacic {
  fill: currentColor;
  d: path("m13.467 20.154l-3.336-7.185l-3.4 4.743V3.5l11.154 8.77h-5.889l3.293 7.032z");
}
</style><path class="q2ztuacic"/>`,
		"fallback": "material-symbols-light:arrow-selector-tool-sharp",
	});
}

export default Component;
