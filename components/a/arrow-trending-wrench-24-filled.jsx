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
		"content": `<style>.r1ot8_wif {
  fill: currentColor;
  d: path("M21 4a1 1 0 0 0-1-1h-5a1 1 0 1 0 0 2h2.586L12.5 10.086l-1.793-1.793a1 1 0 0 0-1.414 0l-6 6a1 1 0 1 0 1.414 1.414L10 10.414l1.793 1.793a1 1 0 0 0 1.414 0L19 6.414V9a1 1 0 1 0 2 0zm-.52 7.833c.25-.25.165-.673-.181-.749a4.001 4.001 0 0 0-4.54 5.47l-3.741 3.742a1.5 1.5 0 0 0 2.121 2.121l3.742-3.741a4.001 4.001 0 0 0 5.47-4.54c-.076-.347-.499-.432-.75-.182L20.858 15.7a1.5 1.5 0 0 1-2.122-2.121z");
}
</style><path class="r1ot8_wif"/>`,
		"fallback": "fluent:arrow-trending-wrench-24-filled",
	});
}

export default Component;
