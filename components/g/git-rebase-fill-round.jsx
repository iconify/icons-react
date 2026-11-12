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
		"content": `<style>.hd9av-j3e {
  fill: currentColor;
  d: path("M7.829 5h8.342a3 3 0 1 1 0 2H7.829A3.01 3.01 0 0 1 6 8.829v6.342a3 3 0 1 1-2 0V8.829A3 3 0 1 1 7.829 5M20 17v4a1 1 0 0 1-2 0v-4c0-.796-.316-1.559-.879-2.121A3 3 0 0 0 15 14h-1.586l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414L13.414 12H15c1.326 0 2.598.527 3.536 1.464A5 5 0 0 1 20 17");
}
</style><path class="hd9av-j3e"/>`,
		"fallback": "coolicons:git-rebase-fill-round",
	});
}

export default Component;
