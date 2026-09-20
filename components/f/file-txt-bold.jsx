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
		"content": `<style>.buwb6sbka {
  fill: currentColor;
  d: path("M48 120a12 12 0 0 0 12-12V44h76v48a12 12 0 0 0 12 12h48v4a12 12 0 0 0 24 0V88a12 12 0 0 0-3.51-8.49l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 12 12m135-40h-23V57Zm-25.27 79l-15 21l15 21a12 12 0 1 1-19.49 14L128 200.65L117.76 215a12 12 0 1 1-19.52-14l15-21l-15-21a12 12 0 1 1 19.52-14L128 159.35L138.24 145a12 12 0 1 1 19.52 14ZM92 152a12 12 0 0 1-12 12h-8v44a12 12 0 0 1-24 0v-44h-8a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12m136 0a12 12 0 0 1-12 12h-8v44a12 12 0 0 1-24 0v-44h-8a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12");
}
</style><path class="buwb6sbka"/>`,
		"fallback": "ph:file-txt-bold",
	});
}

export default Component;
