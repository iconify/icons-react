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
		"content": `<style>.ocwfzob-c {
  fill: currentColor;
  d: path("M9 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M10.732 9A2 2 0 0 0 9 8H4a2 2 0 0 0-2 2v2.5a1 1 0 1 0 2 0v4.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0 2.5 0V12.5a1 1 0 1 0 2 0V10a2 2 0 0 0-.268-1M14 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-3 6.232a2 2 0 0 0 1-1.732V10c0-.35-.06-.687-.17-1H16a2 2 0 0 1 2 2v2a1 1 0 1 1-2 0v3.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 1 1-2.5 0z");
}
</style><path class="ocwfzob-c"/>`,
		"fallback": "fluent:guardian-20-filled",
	});
}

export default Component;
