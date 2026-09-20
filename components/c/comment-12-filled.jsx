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
		"content": `<style>.dwh8do1gg {
  fill: currentColor;
  d: path("M3 1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v1.5a.5.5 0 0 0 .777.416L6.651 9H9a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2z");
}
</style><path class="dwh8do1gg"/>`,
		"fallback": "fluent:comment-12-filled",
	});
}

export default Component;
