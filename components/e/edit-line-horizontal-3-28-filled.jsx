import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mu0e62bag {
  fill: currentColor;
  d: path("M22.249 11.312L10.063 23.497c-.44.44-.987.76-1.587.929l-5.524 1.547a.75.75 0 0 1-.924-.925l1.547-5.525c.168-.6.487-1.146.928-1.587L16.688 5.75zM6.524 14.5H2.75a.75.75 0 0 1 0-1.5h5.274zM19.29 3.15a3.932 3.932 0 0 1 5.56 5.56l-1.54 1.54l-5.56-5.56zM11.524 9.5H2.75a.75.75 0 0 1 0-1.5h10.274zM17.75 3a.8.8 0 0 1 .233.04L16.524 4.5H2.75a.75.75 0 0 1 0-1.5z");
}
</style><path class="mu0e62bag"/>`,
		"fallback": "fluent:edit-line-horizontal-3-28-filled",
	});
}

export default Component;
