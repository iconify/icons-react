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
		"content": `<style>.ib4i_0bvw {
  fill: currentColor;
  d: path("M4 2a2 2 0 0 0-2 2v3a.5.5 0 0 1-.5.5a.5.5 0 0 0 0 1A.5.5 0 0 1 2 9v3a2 2 0 0 0 2 2a.5.5 0 0 0 0-1a1 1 0 0 1-1-1V9c0-.384-.144-.735-.382-1C2.856 7.735 3 7.384 3 7V4a1 1 0 0 1 1-1a.5.5 0 0 0 0-1m8 0a2 2 0 0 1 2 2v3a.5.5 0 0 0 .5.5a.5.5 0 0 1 0 1a.5.5 0 0 0-.5.5v3a2 2 0 0 1-2 2a.5.5 0 0 1 0-1a1 1 0 0 0 1-1V9c0-.384.144-.735.382-1A1.5 1.5 0 0 1 13 7V4a1 1 0 0 0-1-1a.5.5 0 0 1 0-1M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m1.146-5.354a.5.5 0 1 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647z");
}
</style><path class="ib4i_0bvw"/>`,
		"fallback": "fluent:braces-checkmark-16-filled",
	});
}

export default Component;
