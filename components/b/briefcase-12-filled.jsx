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
		"content": `<style>.n30kgubxd {
  fill: currentColor;
  d: path("M6.75 1C7.44 1 8 1.56 8 2.25V3h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1v-.75C4 1.56 4.56 1 5.25 1zm-1.5 1a.25.25 0 0 0-.25.25V3h2v-.75A.25.25 0 0 0 6.75 2z");
}
</style><path class="n30kgubxd"/>`,
		"fallback": "fluent:briefcase-12-filled",
	});
}

export default Component;
