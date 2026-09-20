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
		"content": `<style>.ww--ugmtq {
  fill: var(--svg-color--8d1b28, #8d1b28);
  d: path("M12.002 20.999a8.994 8.994 0 0 0 8.342-12.367h-4.38a.56.56 0 0 0-.488.287l-.776 1.4h1.799a.56.56 0 0 1 .562.561v1.687a.56.56 0 0 1-.562.562h-3.373l-2.67 4.772a.56.56 0 0 1-.489.287H5.47a8.97 8.97 0 0 0 6.532 2.81M3.66 15.377a8.994 8.994 0 0 1 14.874-9.556h-4.216a.56.56 0 0 0-.49.287l-2.355 4.21H8.067a.56.56 0 0 0-.562.562v1.687a.56.56 0 0 0 .562.562h1.838L8.81 15.09a.56.56 0 0 1-.489.286z");
}
</style><path class="ww--ugmtq"/>`,
		"fallback": "token-branded:firo",
	});
}

export default Component;
