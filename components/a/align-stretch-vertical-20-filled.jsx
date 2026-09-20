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
		"content": `<style>.mn3zpq64g {
  fill: currentColor;
  d: path("M2.5 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zm0 13a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zM4 13a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm9 2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2z");
}
</style><path class="mn3zpq64g"/>`,
		"fallback": "fluent:align-stretch-vertical-20-filled",
	});
}

export default Component;
