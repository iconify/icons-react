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
		"content": `<style>.ygnv14b_a {
  fill: currentColor;
  d: path("M17.878 15.66a.75.75 0 0 1-.628.34h-5.5a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.437-.302l5.5 12.5a.75.75 0 0 1-.059.712M12.5 6.317V14.5h3.6zM2.5 16a.5.5 0 0 1-.454-.71l6-13A.5.5 0 0 1 9 2.5v13a.5.5 0 0 1-.5.5z");
}
</style><path class="ygnv14b_a"/>`,
		"fallback": "fluent:flip-horizontal-20-filled",
	});
}

export default Component;
