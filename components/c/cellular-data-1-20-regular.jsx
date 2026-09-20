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
		"content": `<style>.kw_432bky {
  fill: currentColor;
  d: path("M16.503 4a.5.5 0 0 1 .492.41l.008.09v11a.5.5 0 0 1-.992.09l-.008-.09v-11a.5.5 0 0 1 .5-.5m-9 5.999a.5.5 0 0 1 .492.41l.008.09v5a.5.5 0 0 1-.992.09l-.008-.09v-5a.5.5 0 0 1 .5-.5m-3.003 2a.5.5 0 0 1 .492.41L5 12.5v3a.5.5 0 0 1-.992.09L4 15.5v-3a.5.5 0 0 1 .5-.5m6-4.002a.5.5 0 0 1 .492.41l.008.09V15.5a.5.5 0 0 1-.992.09L10 15.5V8.497a.5.5 0 0 1 .5-.5M13.5 6a.5.5 0 0 1 .492.41L14 6.5v9a.5.5 0 0 1-.992.09L13 15.5V6.501a.5.5 0 0 1 .5-.5");
}
</style><path class="kw_432bky"/>`,
		"fallback": "fluent:cellular-data-1-20-regular",
	});
}

export default Component;
