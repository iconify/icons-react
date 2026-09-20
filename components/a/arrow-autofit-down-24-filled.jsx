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
		"content": `<style>.mdp9c96oz {
  fill: currentColor;
  d: path("M17 3a1 1 0 0 1 1 1v13.586l.793-.793a1 1 0 0 1 1.414 1.414l-2.5 2.5a1 1 0 0 1-1.338.068l-.076-.068l-2.5-2.5a1 1 0 0 1 1.414-1.414l.793.793V4a1 1 0 0 1 1-1m-4 1a1 1 0 0 1 0 2H6.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5H11a1 1 0 0 1 0 2H6.5A2.5 2.5 0 0 1 4 17.5v-11A2.5 2.5 0 0 1 6.5 4z");
}
</style><path class="mdp9c96oz"/>`,
		"fallback": "fluent:arrow-autofit-down-24-filled",
	});
}

export default Component;
