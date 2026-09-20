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
		"content": `<style>.h7l8tcc9k {
  fill: currentColor;
  d: path("M10 1.998a2 2 0 0 0-2 2v5.675l-1.312-.688a3.53 3.53 0 0 0-4.53 1.095a.885.885 0 0 0 .375 1.319c4.331 1.873 5.952 3.583 6.664 4.894c.545 1.003 1.616 1.86 2.905 1.681l2.866-.397a2.5 2.5 0 0 0 2.08-1.863l.823-3.253a4 4 0 0 0-3.288-4.938L12 7.138v-3.14a2 2 0 0 0-2-2");
}
</style><path class="h7l8tcc9k"/>`,
		"fallback": "fluent:hand-point-20-filled",
	});
}

export default Component;
