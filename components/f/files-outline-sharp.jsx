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
		"content": `<style>.eiszrwonm {
  fill: currentColor;
  d: path("M3 19V7h6.942l2-2H21v14zm2.114-5.77h6.117V7.115zM4 12.943L8.942 8H4zm0 1.289V18h16V6h-7.77v8.23zm7.5-2.731");
}
</style><path class="eiszrwonm"/>`,
		"fallback": "material-symbols-light:files-outline-sharp",
	});
}

export default Component;
