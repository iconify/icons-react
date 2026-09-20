import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rcox3bcjx {
  fill: currentColor;
  d: path("M176 60H80a4 4 0 0 0-4 4v48a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4V64a4 4 0 0 0-4-4m-4 48H84V68h88Zm28-80H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m4 188a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4ZM96 148a8 8 0 1 1-8-8a8 8 0 0 1 8 8m40 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m40 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-80 40a8 8 0 1 1-8-8a8 8 0 0 1 8 8m40 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m40 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8");
}
</style><path class="rcox3bcjx"/>`,
		"fallback": "ph:calculator-thin",
	});
}

export default Component;
