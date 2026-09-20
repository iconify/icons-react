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
		"content": `<style>.gfs5w_y-c {
  fill: currentColor;
  d: path("M1 3.75A.75.75 0 0 1 1.75 3h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 3.75m7 3A.75.75 0 0 1 8.75 6h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 8 6.75m-3.22-.53a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l.72-.72v4.69a.75.75 0 0 0 1.5 0V8.56l.72.72a.75.75 0 0 0 1.06-1.06z");
}
</style><path class="gfs5w_y-c"/>`,
		"fallback": "fluent:arrow-collapse-all-16-filled",
	});
}

export default Component;
