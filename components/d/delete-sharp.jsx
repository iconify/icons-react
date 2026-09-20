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
		"content": `<style>.og4m9xb8m {
  fill: currentColor;
  d: path("M9.808 17h1V8h-1zm3.384 0h1V8h-1zM6 20V6H5V5h4v-.77h6V5h4v1h-1v14z");
}
</style><path class="og4m9xb8m"/>`,
		"fallback": "material-symbols-light:delete-sharp",
	});
}

export default Component;
