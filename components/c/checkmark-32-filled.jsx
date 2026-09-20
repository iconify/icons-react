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
		"content": `<style>.nucnw1dzv {
  fill: currentColor;
  d: path("M29.907 5.14a1.25 1.25 0 0 1-.047 1.767l-19 18a1.25 1.25 0 0 1-1.775-.055l-6.75-7.25a1.25 1.25 0 0 1 1.83-1.704l5.89 6.327L28.14 5.093a1.25 1.25 0 0 1 1.767.047");
}
</style><path class="nucnw1dzv"/>`,
		"fallback": "fluent:checkmark-32-filled",
	});
}

export default Component;
