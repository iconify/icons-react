import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j0izu5b2d {
  fill: currentColor;
  d: path("M10.5 2A.75.75 0 0 0 9 2v.646a4.5 4.5 0 1 0 1.42 4.206c.088-.465-.304-.852-.777-.852c-.355 0-.636.291-.711.638a3.001 3.001 0 1 1-1.266-3.133H7.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 .75-.75z");
}
</style><path class="j0izu5b2d"/>`,
		"fallback": "fluent:arrow-clockwise-12-filled",
	});
}

export default Component;
