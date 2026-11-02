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
		"content": `<style>.eo3ei4bil {
  fill: currentColor;
  d: path("M6.104 8.79A3.01 3.01 0 0 0 9 11h6a3.01 3.01 0 0 0 2.896-2.21a3 3 0 1 1 2.032.064A5.01 5.01 0 0 1 15 13h-2v2.171a3 3 0 1 1-2 0V13H9a5.006 5.006 0 0 1-4.928-4.146a3.001 3.001 0 1 1 2.032-.064");
}
</style><path class="eo3ei4bil"/>`,
		"fallback": "coolicons:git-fork-fill-round",
	});
}

export default Component;
