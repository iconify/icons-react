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
		"content": `<style>.zp73_qons {
  fill: currentColor;
  d: path("M224 92h-53.39l9.33-51.28a4 4 0 1 0-7.88-1.44L162.48 92h-55.87l9.33-51.28a4 4 0 1 0-7.88-1.44L98.48 92H48a4 4 0 0 0 0 8h49l-10.16 56H32a4 4 0 0 0 0 8h53.39l-9.33 51.28a4 4 0 0 0 3.22 4.65a3.7 3.7 0 0 0 .72.07a4 4 0 0 0 3.94-3.29L93.52 164h55.87l-9.33 51.28a4 4 0 0 0 3.22 4.65a3.7 3.7 0 0 0 .72.07a4 4 0 0 0 3.94-3.29l9.58-52.71H208a4 4 0 0 0 0-8h-49l10.19-56H224a4 4 0 0 0 0-8m-73.16 64H95l10.19-56H161Z");
}
</style><path class="zp73_qons"/>`,
		"fallback": "ph:hash-thin",
	});
}

export default Component;
