import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i2g_8dbpz {
  fill: currentColor;
  d: path("M10.5 6a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 4a.5.5 0 0 0-.5.5V12a.5.5 0 0 0 1 0v-1.5a.5.5 0 0 0-.5-.5m-2-9A2.5 2.5 0 0 1 11 3.5v1.523A5.5 5.5 0 0 0 5.023 11H3.5A2.5 2.5 0 0 1 1 8.5v-5A2.5 2.5 0 0 1 3.5 1zm1.999 7a.62.62 0 1 0 0 1.24a.62.62 0 0 0 0-1.24M3.5 5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0-2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z");
}
</style><path class="i2g_8dbpz"/>`,
		"fallback": "fluent:card-ui-info-16-filled",
	});
}

export default Component;
