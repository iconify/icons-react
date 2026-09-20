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
		"content": `<style>.wq-idx7ew {
  fill: currentColor;
  d: path("M4.5 17A2.5 2.5 0 0 1 2 14.5V7.529l1.568 2.716a3.5 3.5 0 0 0 3.031 1.75H16v.505a2.5 2.5 0 0 1-2.5 2.5H9.707l-1.56 1.56a1.5 1.5 0 0 1-1.061.44zm-.066-7.255a2.5 2.5 0 0 0 2.165 1.25h10.396c1.54 0 2.502-1.667 1.732-3L16.565 4.25A2.5 2.5 0 0 0 14.4 3H4.004c-1.54 0-2.502 1.667-1.732 3z");
}
</style><path class="wq-idx7ew"/>`,
		"fallback": "fluent:folder-open-down-20-filled",
	});
}

export default Component;
