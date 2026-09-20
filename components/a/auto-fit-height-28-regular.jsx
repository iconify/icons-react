import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s_4b7hb5t {
  fill: currentColor;
  d: path("M21.25 23.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1 0-1.5zM13.526 7.168a.75.75 0 0 1 1.004.052l3.25 3.25l.052.056a.75.75 0 0 1-1.056 1.056l-.056-.052l-1.97-1.97v8.88l1.97-1.97a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0l-3.25-3.25l-.052-.056a.75.75 0 0 1 1.056-1.056l.056.052l1.97 1.97V9.56l-1.97 1.97a.75.75 0 1 1-1.06-1.06l3.25-3.25zM21.25 3a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1 0-1.5z");
}
</style><path class="s_4b7hb5t"/>`,
		"fallback": "fluent:auto-fit-height-28-regular",
	});
}

export default Component;
