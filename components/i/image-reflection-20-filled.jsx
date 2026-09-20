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
		"content": `<style>.radn3peqp {
  fill: currentColor;
  d: path("M4 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-1.341 2.5A3 3 0 0 1 16 17a.5.5 0 0 1-1 0a2 2 0 0 0-2-2a.5.5 0 0 1 0-1h-2.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1H7a.5.5 0 0 1 0 1a2 2 0 0 0-2 2a.5.5 0 0 1-1 0c0-1.043.533-1.963 1.341-2.5A3 3 0 0 1 4 12zm1.984 7.723l3.521-3.52a.7.7 0 0 1 .99 0l3.521 3.52a2 2 0 0 0 .707-.707l-3.52-3.521a1.7 1.7 0 0 0-2.405 0l-3.521 3.521c.172.291.416.535.707.707M13 7a1 1 0 1 0-2 0a1 1 0 0 0 2 0");
}
</style><path class="radn3peqp"/>`,
		"fallback": "fluent:image-reflection-20-filled",
	});
}

export default Component;
