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
		"content": `<style>.wwt1zxbjc {
  fill: currentColor;
  d: path("M2 20L12 4l10 16zm3.6-2h12.8L12 7.75zm6.4-5.125");
}
</style><path class="wwt1zxbjc"/>`,
		"fallback": "material-symbols:change-history-outline-sharp",
	});
}

export default Component;
