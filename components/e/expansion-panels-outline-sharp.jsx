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
		"content": `<style>.l9133mfgb {
  fill: currentColor;
  d: path("M12 17.308L15.308 14l-.714-.713L12 15.88l-2.594-2.594l-.714.713zm-2.594-6.594L12 8.119l2.594 2.594l.714-.713L12 6.692L8.692 10zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="l9133mfgb"/>`,
		"fallback": "material-symbols-light:expansion-panels-outline-sharp",
	});
}

export default Component;
