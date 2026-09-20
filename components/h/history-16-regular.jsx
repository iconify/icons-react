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
		"content": `<style>.swk7trbne {
  fill: currentColor;
  d: path("M8 3a5 5 0 1 1-4.98 5.455a.5.5 0 0 0-.996.09A6 6 0 1 0 3.499 4.03V2.5a.5.5 0 1 0-1 0v3A.5.5 0 0 0 3 6h3a.5.5 0 1 0 0-1H4a5 5 0 0 1 4-2m0 2.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 .5.5h2a.5.5 0 1 0 0-1H8z");
}
</style><path class="swk7trbne"/>`,
		"fallback": "fluent:history-16-regular",
	});
}

export default Component;
