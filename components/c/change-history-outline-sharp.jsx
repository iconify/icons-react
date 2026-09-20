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
		"content": `<style>.bkrj1mbdq {
  fill: currentColor;
  d: path("M3.808 19L12 5.885L20.192 19zM5.6 18h12.8L12 7.75zm6.4-5.125");
}
</style><path class="bkrj1mbdq"/>`,
		"fallback": "material-symbols-light:change-history-outline-sharp",
	});
}

export default Component;
