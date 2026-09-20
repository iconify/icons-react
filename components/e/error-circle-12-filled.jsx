import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z4493jbtx {
  fill: currentColor;
  d: path("M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10m-.75-2.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m.258-4.84a.5.5 0 0 1 .984 0l.008.09V6l-.008.09a.5.5 0 0 1-.984 0L5.5 6V3.5z");
}
</style><path class="z4493jbtx"/>`,
		"fallback": "fluent:error-circle-12-filled",
	});
}

export default Component;
