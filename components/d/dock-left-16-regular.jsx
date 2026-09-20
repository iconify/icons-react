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
		"content": `<style>.yysm6jbio {
  d: path("M12 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM6.001 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.001V4zM12 4H7.001v8H12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z");
  fill: currentColor;
  fill-rule: nonzero;
}
</style><path class="yysm6jbio"/>`,
		"fallback": "fluent:dock-left-16-regular",
	});
}

export default Component;
