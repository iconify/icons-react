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
		"content": `<style>.qcwdu-_hy {
  fill: currentColor;
  d: path("m2.293 11.293l6-6A1 1 0 0 1 9 5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9a1 1 0 0 1-.707-.293l-6-6a1 1 0 0 1 0-1.414m11.414-2a.999.999 0 1 0-1.414 1.414L13.586 12l-1.293 1.293a.999.999 0 1 0 1.414 1.414L15 13.414l1.293 1.293a.999.999 0 1 0 1.414-1.414L16.414 12l1.293-1.293a.999.999 0 1 0-1.414-1.414L15 10.586Z");
}
</style><path class="qcwdu-_hy"/>`,
		"fallback": "coolicons:backspace-fill-sharp",
	});
}

export default Component;
