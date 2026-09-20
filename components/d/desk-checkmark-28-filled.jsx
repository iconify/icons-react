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
		"content": `<style>.sa0u7rb1z {
  fill: currentColor;
  d: path("M13.626 10.5q.167.38.374.74v10.01A2.75 2.75 0 0 1 11.25 24h-6.5A2.75 2.75 0 0 1 2 21.25l.004-10.75zm12.375 12.75a.75.75 0 0 1-1.5 0v-9.408a7.5 7.5 0 0 0 1.5-1.246zM6.25 14a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM20.5 1a6.5 6.5 0 1 1 0 13a6.5 6.5 0 0 1 0-13m3.854 3.646a.5.5 0 0 0-.707 0L19 9.293l-1.646-1.647a.5.5 0 1 0-.707.708l2 2a.5.5 0 0 0 .707 0l5-5a.5.5 0 0 0 0-.708M13.866 4a7.53 7.53 0 0 0-.716 5H2.004V6.75A2.75 2.75 0 0 1 4.754 4z");
}
</style><path class="sa0u7rb1z"/>`,
		"fallback": "fluent:desk-checkmark-28-filled",
	});
}

export default Component;
