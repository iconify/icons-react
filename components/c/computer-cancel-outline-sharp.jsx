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
		"content": `<style>.raz8dzbyb {
  fill: currentColor;
  d: path("m9.4 14.27l2.6-2.6l2.6 2.6l.708-.708l-2.6-2.6l2.6-2.6l-.708-.708l-2.6 2.6l-2.6-2.6l-.708.708l2.6 2.6l-2.6 2.6zm-7.63 5.192v-1h20.46v1zm1.23-2v-13h18v13zm1-1h16v-11H4zm0 0v-11z");
}
</style><path class="raz8dzbyb"/>`,
		"fallback": "material-symbols-light:computer-cancel-outline-sharp",
	});
}

export default Component;
