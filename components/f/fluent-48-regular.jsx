import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z19bz6b8t {
  fill: currentColor;
  d: path("M23.83 4.158a1.5 1.5 0 0 1 1.34 0l12 6.001a1.5 1.5 0 0 1 0 2.684l-9.316 4.659l9.317 4.659a1.5 1.5 0 0 1 0 2.683L26 30.43V42.5a1.5 1.5 0 0 1-2.298 1.27l-12-7.54A1.5 1.5 0 0 1 11 34.96V11.5a1.5 1.5 0 0 1 .83-1.34zM14 12.428v21.703l9 5.655V29.503a1.5 1.5 0 0 1 .83-1.342l9.316-4.658l-9.317-4.66a1.5 1.5 0 0 1 0-2.683l9.317-4.66L24.5 7.178z");
}
</style><path class="z19bz6b8t"/>`,
		"fallback": "fluent:fluent-48-regular",
	});
}

export default Component;
