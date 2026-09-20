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
		"content": `<style>.v9__4jbgp {
  fill: currentColor;
  d: path("M2.5 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zm0 13a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zM4 13a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm2 1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zm7 1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2m-1-2V7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1");
}
</style><path class="v9__4jbgp"/>`,
		"fallback": "fluent:align-stretch-vertical-20-regular",
	});
}

export default Component;
