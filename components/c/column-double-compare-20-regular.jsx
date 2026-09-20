import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f7i1m_bye {
  fill: currentColor;
  d: path("M7 3H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M3 4h4a1 1 0 0 1 1 1v1H2V5a1 1 0 0 1 1-1m4 12H3a1 1 0 0 1-1-1V7h6v8a1 1 0 0 1-1 1M17 3h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-4 1h4a1 1 0 0 1 1 1v5h-6V5a1 1 0 0 1 1-1m4 12h-4a1 1 0 0 1-1-1v-2h6v2a1 1 0 0 1-1 1");
}
</style><path class="f7i1m_bye"/>`,
		"fallback": "fluent:column-double-compare-20-regular",
	});
}

export default Component;
