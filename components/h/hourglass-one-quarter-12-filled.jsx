import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.iz1n8kwho {
  fill: currentColor;
  d: path("M7.307 8.21c.18.179.375.401.522.79H4.164a2.1 2.1 0 0 1 .523-.79c.07-.07.141-.133.226-.21h2.168c.085.077.154.14.226.21");
}
</style><path class="iz1n8kwho"/>`,
		"fallback": "fluent:hourglass-one-quarter-12-filled",
	});
}

export default Component;
