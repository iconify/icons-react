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
		"content": `<style>.l5wcc98ts {
  fill: currentColor;
  d: path("M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4m0 2.5C14.335 6.5 6.5 14.335 6.5 24S14.335 41.5 24 41.5S41.5 33.665 41.5 24S33.665 6.5 24 6.5m-1.656 4.697c.506-1.599 2.805-1.599 3.312 0l.044.166c.866 3.904 1.765 7.806 2.475 11.743c.182 1.009.325 1.917.325 2.394a4.5 4.5 0 1 1-9 0c0-.477.143-1.385.325-2.395c.576-3.194 1.796-8.717 2.475-11.742z");
}
</style><path class="l5wcc98ts"/>`,
		"fallback": "fluent:gauge-rotate-0-48-regular",
	});
}

export default Component;
