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
		"content": `<style>.ybpkxcl-z {
  fill: currentColor;
  d: path("M1.5 10.5a.5.5 0 0 1 .5.5v.5A1.5 1.5 0 0 0 3.5 13H4a.5.5 0 0 1 0 1h-.5A2.5 2.5 0 0 1 1 11.5V11a.5.5 0 0 1 .5-.5m13 0a.5.5 0 0 1 .5.5v.5a2.5 2.5 0 0 1-2.5 2.5H12a.5.5 0 0 1 0-1h.5a1.5 1.5 0 0 0 1.5-1.5V11a.5.5 0 0 1 .5-.5m-11-6A.5.5 0 0 1 4 5v6a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5m3 0A.5.5 0 0 1 7 5v6a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5m3 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5m3 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5M4 2a.5.5 0 0 1 0 1h-.5A1.5 1.5 0 0 0 2 4.5V5a.5.5 0 0 1-1 0v-.5A2.5 2.5 0 0 1 3.5 2zm8.5 0A2.5 2.5 0 0 1 15 4.5V5a.5.5 0 0 1-1 0v-.5A1.5 1.5 0 0 0 12.5 3H12a.5.5 0 0 1 0-1z");
}
</style><path class="ybpkxcl-z"/>`,
		"fallback": "fluent:barcode-scanner-16-regular",
	});
}

export default Component;
