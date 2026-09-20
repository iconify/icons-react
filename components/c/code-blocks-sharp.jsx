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
		"content": `<style>.mkod4dbnb {
  fill: currentColor;
  d: path("m9.6 15.6l1.4-1.425L8.825 12L11 9.825L9.6 8.4L6 12zm4.8 0L18 12l-3.6-3.6L13 9.825L15.175 12L13 14.175zM3 21V3h18v18z");
}
</style><path class="mkod4dbnb"/>`,
		"fallback": "material-symbols:code-blocks-sharp",
	});
}

export default Component;
