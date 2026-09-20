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
		"content": `<style>.nbhkq3bys {
  fill: currentColor;
  d: path("M3 19V5h6.596l2 2H21v12zm1-1h16V8h-8.806l-2-2H4zm0 0V6z");
}
</style><path class="nbhkq3bys"/>`,
		"fallback": "material-symbols-light:folder-outline-sharp",
	});
}

export default Component;
