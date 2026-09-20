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
		"content": `<style>.h7jii7bzb {
  fill: currentColor;
  d: path("M8 8.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm2 3.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m3-1.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0zM4 4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3zm5.5 4h3.293L11 3.207V6.5a.5.5 0 0 0 .5.5");
}
</style><path class="h7jii7bzb"/>`,
		"fallback": "fluent:document-data-20-regular",
	});
}

export default Component;
