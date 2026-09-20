import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ooj_yfg4b {
  fill: currentColor;
  d: path("M24.5 3A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5v-17A4.5 4.5 0 0 1 7.5 3zM10 19a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 2a1 1 0 1 1 0 2a1 1 0 0 1 0-2m6 0a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-6-10a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 2a1 1 0 1 1 0 2a1 1 0 0 1 0-2m6 0a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zM8 7a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2z");
}
</style><path class="ooj_yfg4b"/>`,
		"fallback": "fluent:form-32-filled",
	});
}

export default Component;
