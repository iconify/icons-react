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
		"content": `<style>.nwpsqvmrs {
  fill: currentColor;
  d: path("M2.75 6a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0V8.56l6.47 6.47a.75.75 0 0 0 1.06 0l6.754-6.754a.75.75 0 0 0-1.06-1.06L10.5 13.439L4.56 7.5h4.69a.75.75 0 0 0 0-1.5z");
}
</style><path class="nwpsqvmrs"/>`,
		"fallback": "fluent:arrow-bounce-20-filled",
	});
}

export default Component;
