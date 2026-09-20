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
		"content": `<style>.nkf5_nbvr {
  fill: currentColor;
  d: path("M25.5 6.5a1.5 1.5 0 0 0-3 0v25.379l-7.94-7.94a1.5 1.5 0 0 0-2.12 2.122l10.5 10.5a1.5 1.5 0 0 0 2.12 0l10.5-10.5a1.5 1.5 0 0 0-2.12-2.122l-7.94 7.94zM10.5 40a1.5 1.5 0 0 0 0 3h27a1.5 1.5 0 0 0 0-3z");
}
</style><path class="nkf5_nbvr"/>`,
		"fallback": "fluent:arrow-download-48-filled",
	});
}

export default Component;
