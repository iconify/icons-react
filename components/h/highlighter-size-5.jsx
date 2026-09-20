import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.aurd0fsyr {
  fill: currentColor;
  d: path("m10.25 22.25l-8.5-8.5q-.275-.275-.275-.7t.275-.7l10.6-10.6q.275-.275.688-.275t.712.3l8.5 8.475q.275.275.275.7t-.275.7l-10.6 10.6q-.275.275-.7.275t-.7-.275");
}
</style><path class="aurd0fsyr"/>`,
		"fallback": "material-symbols:highlighter-size-5",
	});
}

export default Component;
