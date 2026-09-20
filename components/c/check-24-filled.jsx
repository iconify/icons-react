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
		"content": `<style>.er5xytbrg {
  fill: currentColor;
  d: path("M21.77 5.79a.75.75 0 1 0-1.04-1.08l-6.75 6.5a.75.75 0 1 0 1.04 1.08zM18.987 5H4.55A2.55 2.55 0 0 0 2 7.55v6.9A2.55 2.55 0 0 0 4.55 17h14.9A2.55 2.55 0 0 0 22 14.45v-6.9q0-.278-.057-.538l-6.23 5.999a1.75 1.75 0 0 1-2.427-2.522zM4.5 9.25a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75");
}
</style><path class="er5xytbrg"/>`,
		"fallback": "fluent:check-24-filled",
	});
}

export default Component;
