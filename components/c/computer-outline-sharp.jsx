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
		"content": `<style>.t1f35lbmf {
  fill: currentColor;
  d: path("M1.77 19.462v-1h20.46v1zm1.23-2v-13h18v13zm1-1h16v-11H4zm0 0v-11z");
}
</style><path class="t1f35lbmf"/>`,
		"fallback": "material-symbols-light:computer-outline-sharp",
	});
}

export default Component;
