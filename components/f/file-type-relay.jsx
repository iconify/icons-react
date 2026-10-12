import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bq6_evrii {
  d: path("M7.28 10.4a2.64 2.64 0 1 1-5.28 0a2.64 2.64 0 0 1 5.28 0");
}

.clorwjbls {
  fill: var(--svg-color--f26b00, #f26b00);
}

.ixotx3b2j {
  d: path("M27.36 22.32H12.57a3.54 3.54 0 0 1 0-7.07h6.7a2.1 2.1 0 0 0 0-4.18H4.63a.72.72 0 0 1 0-1.45h14.62a3.54 3.54 0 0 1 0 7.07h-6.69a2.1 2.1 0 0 0 0 4.18h14.79a.72.72 0 0 1 0 1.45");
}

.uwmeun0td {
  d: path("M24.72 21.6a2.64 2.64 0 1 1 5.28 0a2.64 2.64 0 0 1-5.28 0");
}
</style><g class="clorwjbls"><path class="bq6_evrii"/><path class="ixotx3b2j"/><path class="uwmeun0td"/></g>`,
		"fallback": "vscode-icons:file-type-relay",
	});
}

export default Component;
