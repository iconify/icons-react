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
		"content": `<style>.t7wpo--ug {
  fill: currentColor;
  d: path("M14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9M4 14.5A1.5 1.5 0 0 0 5.5 16h3.708q.149.524.394 1H5.5A2.5 2.5 0 0 1 3 14.5V8.437a2 2 0 0 0 1 0zm10.854-2.354a.5.5 0 1 0-.707.707L15.293 14H12.5a.5.5 0 0 0 0 1h2.793l-1.146 1.146a.5.5 0 1 0 .707.707l2.002-2.001a.503.503 0 0 0-.003-.706zM10.258 11a5.5 5.5 0 0 0-.656 1H7.5a.5.5 0 0 1 0-1zM14.5 3A2.5 2.5 0 0 1 17 5.5v4.1a5.5 5.5 0 0 0-1-.392V5.5A1.5 1.5 0 0 0 14.5 4h-9c-.513 0-.966.258-1.236.65a2 2 0 0 0-1.066-.128A2.5 2.5 0 0 1 5.5 3zm-2 5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm-9-2.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2");
}
</style><path class="t7wpo--ug"/>`,
		"fallback": "fluent:channel-arrow-right-20-regular",
	});
}

export default Component;
