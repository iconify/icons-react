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
		"content": `<style>.vqi-irzyf {
  fill: currentColor;
  d: path("M5.415 5.27A2.25 2.25 0 0 1 7.441 4h9.118c.863 0 1.65.493 2.026 1.27l3.09 6.388c.214.44.325.925.325 1.415v3.677A2.25 2.25 0 0 1 19.75 19H4.25A2.25 2.25 0 0 1 2 16.75v-3.677c0-.49.11-.974.324-1.415zm11.82.653a.75.75 0 0 0-.676-.423H7.441a.75.75 0 0 0-.676.423L4.31 11h15.382zM3.5 13.25v3.5c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75M18 16a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}
</style><path class="vqi-irzyf"/>`,
		"fallback": "fluent:hard-drive-24-regular",
	});
}

export default Component;
