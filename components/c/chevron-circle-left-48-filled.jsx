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
		"content": `<style>.rru-93_el {
  fill: currentColor;
  d: path("M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4m3.634 28.616a1.25 1.25 0 0 1-1.768 1.768l-9.5-9.5a1.25 1.25 0 0 1 0-1.768l9.5-9.5a1.25 1.25 0 0 1 1.768 1.768L19.018 24z");
}
</style><path class="rru-93_el"/>`,
		"fallback": "fluent:chevron-circle-left-48-filled",
	});
}

export default Component;
