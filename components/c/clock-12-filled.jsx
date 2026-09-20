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
		"content": `<style>.jyz35hbpy {
  fill: currentColor;
  d: path("M6 1a5 5 0 1 1 0 10A5 5 0 0 1 6 1m-.5 2.5A.5.5 0 0 0 5 4v2.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H6V4a.5.5 0 0 0-.5-.5");
}
</style><path class="jyz35hbpy"/>`,
		"fallback": "fluent:clock-12-filled",
	});
}

export default Component;
