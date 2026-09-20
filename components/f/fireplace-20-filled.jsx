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
		"content": `<style>.ajhqk3qwk {
  fill: currentColor;
  d: path("M10 2a7 7 0 0 0-7 7v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9a7 7 0 0 0-7-7M4 9a6 6 0 1 1 12 0v5h-3.505c.62-.616 1.005-1.481 1.005-2.5c0-1.132-.627-1.968-1.171-2.694l-.128-.17c-.591-.8-1.101-1.566-1.101-2.709a.5.5 0 0 0-.759-.428c-1.398.846-1.448 2.174-1.39 2.992q-.179-.151-.418-.365a.5.5 0 0 0-.666 0l-.002.002l-.002.002l-.005.004l-.015.015l-.05.048q-.061.06-.16.174a4.5 4.5 0 0 0-.464.652A4.85 4.85 0 0 0 6.5 11.5c0 1.019.385 1.884 1.005 2.5H4zm-1.5 7a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z");
}
</style><path class="ajhqk3qwk"/>`,
		"fallback": "fluent:fireplace-20-filled",
	});
}

export default Component;
