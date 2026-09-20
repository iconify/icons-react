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
		"content": `<style>.etyl813nq {
  fill: currentColor;
  d: path("M3.808 19L12 5.885L20.192 19z");
}
</style><path class="etyl813nq"/>`,
		"fallback": "material-symbols-light:change-history-sharp",
	});
}

export default Component;
