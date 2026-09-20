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
		"content": `<style>.vh6_vvbig {
  fill: currentColor;
  d: path("M7.5 12.5q-.213 0-.356-.144T7 11.999t.144-.356t.356-.143h9q.213 0 .356.144t.144.357t-.144.356t-.356.143z");
}
</style><path class="vh6_vvbig"/>`,
		"fallback": "material-symbols-light:check-indeterminate-small-outline-rounded",
	});
}

export default Component;
