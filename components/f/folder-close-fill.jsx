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
		"content": `<style>.o0t0owbdd {
  fill: currentColor;
  d: path("M12.414 5H19a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5c.265 0 .52.105.707.293ZM12 11.586l-1.293-1.293a.999.999 0 1 0-1.414 1.414L10.586 13l-1.293 1.293a.999.999 0 1 0 1.414 1.414L12 14.414l1.293 1.293a.999.999 0 1 0 1.414-1.414L13.414 13l1.293-1.293a.999.999 0 1 0-1.414-1.414Z");
}
</style><path class="o0t0owbdd"/>`,
		"fallback": "coolicons:folder-close-fill",
	});
}

export default Component;
