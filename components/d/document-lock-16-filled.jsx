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
		"content": `<style>.f0i2aubpg {
  fill: currentColor;
  d: path("M9 1v3.5A1.5 1.5 0 0 0 10.5 6H14v7.5a1.5 1.5 0 0 1-1.5 1.5H9.732A2 2 0 0 0 10 14v-4a2 2 0 0 0-1.5-1.937V8A3 3 0 0 0 4 5.401V2.5A1.5 1.5 0 0 1 5.5 1zm1 .25V4.5a.5.5 0 0 0 .5.5h3.25zM3.5 8v1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5V8a2 2 0 1 0-4 0m1 1V8a1 1 0 0 1 2 0v1zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5");
}
</style><path class="f0i2aubpg"/>`,
		"fallback": "fluent:document-lock-16-filled",
	});
}

export default Component;
