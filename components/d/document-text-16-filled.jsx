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
		"content": `<style>.owjeh6amk {
  fill: currentColor;
  d: path("M8 4.5V1H4.5A1.5 1.5 0 0 0 3 2.5v11A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V6H9.5A1.5 1.5 0 0 1 8 4.5m1 0V1.25L12.75 5H9.5a.5.5 0 0 1-.5-.5M5.5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M5 10.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 1.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1");
}
</style><path class="owjeh6amk"/>`,
		"fallback": "fluent:document-text-16-filled",
	});
}

export default Component;
