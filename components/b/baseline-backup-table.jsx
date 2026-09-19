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
		"content": `<style>.mnwepvb6s {
  fill: currentColor;
  d: path("M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 16H4v-5h5zm7 0h-5v-5h5zm0-7H4V4h12z");
}

.oqxs_owrp {
  fill: currentColor;
  d: path("M20 6v14H6v2h14c1.1 0 2-.9 2-2V6z");
}
</style><path class="oqxs_owrp"/><path class="mnwepvb6s"/>`,
		"fallback": "ic:baseline-backup-table",
	});
}

export default Component;
