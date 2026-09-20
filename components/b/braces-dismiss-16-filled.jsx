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
		"content": `<style>.hxyv94gdi {
  fill: currentColor;
  d: path("M4 2a2 2 0 0 0-2 2v3a.5.5 0 0 1-.5.5a.5.5 0 0 0 0 1A.5.5 0 0 1 2 9v3a2 2 0 0 0 2 2a.5.5 0 0 0 0-1a1 1 0 0 1-1-1V9c0-.384-.144-.735-.382-1C2.856 7.735 3 7.384 3 7V4a1 1 0 0 1 1-1a.5.5 0 0 0 0-1m8 0a2 2 0 0 1 2 2v3a.5.5 0 0 0 .5.5a.5.5 0 0 1 0 1a.5.5 0 0 0-.5.5v3a2 2 0 0 1-2 2a.5.5 0 0 1 0-1a1 1 0 0 0 1-1V9c0-.384.144-.735.382-1A1.5 1.5 0 0 1 13 7V4a1 1 0 0 0-1-1a.5.5 0 0 1 0-1M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8M6.146 6.854a.5.5 0 1 1 .708-.708L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707L6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8z");
}
</style><path class="hxyv94gdi"/>`,
		"fallback": "fluent:braces-dismiss-16-filled",
	});
}

export default Component;
