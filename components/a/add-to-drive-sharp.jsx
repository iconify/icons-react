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
		"content": `<style>.wdnetxb8v {
  fill: currentColor;
  d: path("M7.044 20q-1.032 0-1.928-.504q-.897-.504-1.42-1.38q-.523-.877-.523-1.885t.523-1.885l1.09-1.846h3.906l4.37 7.5zm-1.678-8.5l3.311-5.596q.523-.877 1.41-1.39T12 4t1.904.514t1.4 1.39l1.365 2.302l-1.934 3.294zM18 22v-3h-3v-1h3v-3h1v3h3v1h-3v3zm-3.652-7.837l2.9-4.982l2 3.377q-1.344-.175-2.624.24q-1.28.416-2.276 1.366");
}
</style><path class="wdnetxb8v"/>`,
		"fallback": "material-symbols-light:add-to-drive-sharp",
	});
}

export default Component;
