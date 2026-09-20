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
		"content": `<style>.eszqpsb7l {
  fill: currentColor;
  d: path("M9 1H6a2 2 0 0 0-2 2v2.205a5.5 5.5 0 0 1 4.666 9.791H12a2 2 0 0 0 2-2V6.001h-3.5A1.5 1.5 0 0 1 9 4.5zm4.997 4h-3.498a.5.5 0 0 1-.5-.5V1h.01zM10 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4.854 2.353l.003.003a.5.5 0 0 0 .348.144h.006a.5.5 0 0 0 .35-.146l2-2a.5.5 0 0 0-.707-.708L6 11.293V8.5a.5.5 0 0 0-1 0v2.793l-1.146-1.147a.5.5 0 0 0-.708.708z");
}
</style><path class="eszqpsb7l"/>`,
		"fallback": "fluent:document-arrow-down-16-filled",
	});
}

export default Component;
