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
		"content": `<style>.iwuigck9q {
  fill: currentColor;
  d: path("M4 21V5h4.885L12 1.885L15.116 5H20v16zm1-1h14V6H5zm2.5-2.5h9.154l-2.827-3.77l-2.615 3.308l-1.75-2.115zM10.139 5h3.723L12 3.139zM5 20V6z");
}
</style><path class="iwuigck9q"/>`,
		"fallback": "material-symbols-light:hallway-outline-sharp",
	});
}

export default Component;
