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
		"content": `<style>.pggnafbly {
  fill: currentColor;
  d: path("M9.5 15v-2H11v.5h2v-1H9.5V9h5v2H13v-.5h-2v1h3.5V15zm6.5 0v-2h1.5v.5h2v-1H16V9h5v2h-1.5v-.5h-2v1H21V15zM3 15V9h5v2H6.5v-.5h-2v3h2V13H8v2z");
}
</style><path class="pggnafbly"/>`,
		"fallback": "material-symbols:css-outline-sharp",
	});
}

export default Component;
