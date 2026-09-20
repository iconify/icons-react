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
		"content": `<style>.nldybyyhk {
  fill: currentColor;
  d: path("M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-49.17-50.83a4 4 0 0 1-5.66 5.66L100 105.66V144a4 4 0 0 1-8 0V96a4 4 0 0 1 4-4h48a4 4 0 0 1 0 8h-38.34Z");
}
</style><path class="nldybyyhk"/>`,
		"fallback": "ph:arrow-square-up-left-thin",
	});
}

export default Component;
