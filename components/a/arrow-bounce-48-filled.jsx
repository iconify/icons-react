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
		"content": `<style>.yv3c5fbpy {
  fill: currentColor;
  d: path("M4 14.5A1.5 1.5 0 0 1 5.5 13h15a1.5 1.5 0 0 1 0 3H9.189l15.813 15.407l16.453-15.983a1.5 1.5 0 1 1 2.09 2.152l-17.5 17a1.5 1.5 0 0 1-2.092-.002L7 18.056V29.5a1.5 1.5 0 0 1-3 0z");
}
</style><path class="yv3c5fbpy"/>`,
		"fallback": "fluent:arrow-bounce-48-filled",
	});
}

export default Component;
