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
		"content": `<style>.jip9wcbbi {
  fill: currentColor;
  d: path("M14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9M7 7H5.5A1.5 1.5 0 0 0 4 8.5v6A1.5 1.5 0 0 0 5.5 16h3.708q.149.522.39.995L9.5 17h-4A2.5 2.5 0 0 1 3 14.5v-6A2.5 2.5 0 0 1 5.5 6H7zm7.854 5.147a.5.5 0 1 0-.707.707L15.293 14H12.5a.5.5 0 0 0 0 1h2.793l-1.146 1.146a.5.5 0 1 0 .707.707l2.002-2.001a.5.5 0 0 0 .144-.35v-.005a.5.5 0 0 0-.146-.35zM14.5 3A2.5 2.5 0 0 1 17 5.5v4.1a5.5 5.5 0 0 0-1-.392V5.5A1.5 1.5 0 0 0 14.5 4h-4A1.5 1.5 0 0 0 9 5.5v6c0 .382.144.73.379.994q-.2.51-.298 1.064A2.5 2.5 0 0 1 8 11.5v-6A2.5 2.5 0 0 1 10.5 3z");
}
</style><path class="jip9wcbbi"/>`,
		"fallback": "fluent:copy-arrow-right-20-regular",
	});
}

export default Component;
