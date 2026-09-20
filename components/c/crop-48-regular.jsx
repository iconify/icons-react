import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.botsbbmgq {
  fill: currentColor;
  d: path("M14 5.25a1.25 1.25 0 1 0-2.5 0v6.25H5.25a1.25 1.25 0 1 0 0 2.5h6.25v16.25a6.25 6.25 0 0 0 6.25 6.25H34v6.25a1.25 1.25 0 1 0 2.5 0V36.5h6.25a1.25 1.25 0 1 0 0-2.5h-25A3.75 3.75 0 0 1 14 30.25zm20 12.5V32h2.5V17.75a6.25 6.25 0 0 0-6.25-6.25H16V14h14.25A3.75 3.75 0 0 1 34 17.75");
}
</style><path class="botsbbmgq"/>`,
		"fallback": "fluent:crop-48-regular",
	});
}

export default Component;
