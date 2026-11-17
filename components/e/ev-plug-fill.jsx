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
		"content": `<style>.fkqo_h58f {
  fill: currentColor;
  d: path("M17.105 4c.922 0 1.793.424 2.361 1.15A9.484 9.484 0 0 1 12 20.485A9.482 9.482 0 0 1 4.534 5.15A3 3 0 0 1 6.895 4ZM8 8a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm4 0a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm4.01 0H16a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M10 13a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm4.01 0H14a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="fkqo_h58f"/>`,
		"fallback": "coolicons:ev-plug-fill",
	});
}

export default Component;
