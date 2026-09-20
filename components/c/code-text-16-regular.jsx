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
		"content": `<style>.jnmkicchz {
  fill: currentColor;
  d: path("M1.5 3a.5.5 0 0 0 0 1H7a.5.5 0 0 0 0-1zm3 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM3 9.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5M1.5 12a.5.5 0 0 0 0 1H9a.5.5 0 0 0 0-1zm9-5.5A.5.5 0 0 1 11 6h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5M9.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z");
}
</style><path class="jnmkicchz"/>`,
		"fallback": "fluent:code-text-16-regular",
	});
}

export default Component;
