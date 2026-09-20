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
		"content": `<style>.l3u08f48d {
  fill: currentColor;
  d: path("M6.002 3a2 2 0 0 0-1.414.585l-3.002 3a2 2 0 0 0 0 2.83l3.002 3A2 2 0 0 0 6.002 13H12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-.707 1.293A1 1 0 0 1 6.002 4H12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6.002a1 1 0 0 1-.707-.293l-3.002-3a1 1 0 0 1 0-1.414zm2.059 1.353a.5.5 0 1 0-.708.708L8.293 8L6.646 9.646a.5.5 0 0 0 .708.708L9 8.707l1.646 1.647a.5.5 0 0 0 .708-.708L9.707 8l1.647-1.646a.5.5 0 0 0-.708-.708L9 7.293z");
}
</style><path class="l3u08f48d"/>`,
		"fallback": "fluent:backspace-16-regular",
	});
}

export default Component;
