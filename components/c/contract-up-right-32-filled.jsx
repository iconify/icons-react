import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.eh8lvhb9z {
  fill: currentColor;
  d: path("M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5H19a1 1 0 1 1 0-2h5.5a2.5 2.5 0 0 0 2.5-2.5V16h-7.5a3.5 3.5 0 0 1-3.5-3.5V5H7.5A2.5 2.5 0 0 0 5 7.5V13a1 1 0 1 1-2 0zM4 20a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-6.586l-7.293 7.293a1 1 0 0 1-1.414-1.414L10.586 20z");
}
</style><path class="eh8lvhb9z"/>`,
		"fallback": "fluent:contract-up-right-32-filled",
	});
}

export default Component;
