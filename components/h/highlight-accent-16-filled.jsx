import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ig6lefbee {
  fill: currentColor;
  d: path("M13.5 2v3a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V2zm-8 6.5h5v1.867a2 2 0 0 1-.971 1.716L5.5 14.5z");
}
</style><path class="ig6lefbee"/>`,
		"fallback": "fluent:highlight-accent-16-filled",
	});
}

export default Component;
