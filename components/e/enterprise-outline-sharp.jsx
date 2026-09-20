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
		"content": `<style>.l03zihsaj {
  fill: currentColor;
  d: path("M12 15q.633 0 1.066-.434q.434-.433.434-1.066t-.434-1.066T12 12t-1.066.434q-.434.433-.434 1.066t.434 1.066T12 15m-9 5V7h6V4h6v3h6v13zm1-1h16V8H4zm6-12h4V5h-4zM4 19V8z");
}
</style><path class="l03zihsaj"/>`,
		"fallback": "material-symbols-light:enterprise-outline-sharp",
	});
}

export default Component;
