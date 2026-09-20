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
		"content": `<style>.l7nn7wmoc {
  fill: currentColor;
  d: path("M4 21v-2H1v-9h4v5h14v-5h4v9h-3v2h-2v-2H6v2zm3-8V8H4V3h16v5h-3v5z");
}
</style><path class="l7nn7wmoc"/>`,
		"fallback": "material-symbols:chair-sharp",
	});
}

export default Component;
