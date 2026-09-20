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
		"content": `<style>.jutjuepee {
  fill: currentColor;
  d: path("M14 3a.5.5 0 0 1 0 1h-.996v4.684q0 .258.038.511a5.5 5.5 0 0 0-.952.36a4.5 4.5 0 0 1-.086-.871V4h-4.01v4.687a4.5 4.5 0 0 1-.538 2.134L6.821 12H9.6a5.5 5.5 0 0 0-.393 1H6.282l-1.22 2.264a.5.5 0 0 0 .44.738h3.705q.15.523.394 1H5.5a1.5 1.5 0 0 1-1.32-2.212l2.395-4.443a3.5 3.5 0 0 0 .418-1.66V4H6a.5.5 0 0 1 0-1zm5 11.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-3.793 0l1.147-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708z");
}
</style><path class="jutjuepee"/>`,
		"fallback": "fluent:beaker-dismiss-20-regular",
	});
}

export default Component;
