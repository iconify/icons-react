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
		"content": `<style>.a1yx9iwrv {
  fill: currentColor;
  d: path("M4.096 16.616V7.385L11.02 12zm8.885 0V7.385L19.904 12z");
}
</style><path class="a1yx9iwrv"/>`,
		"fallback": "material-symbols-light:fast-forward",
	});
}

export default Component;
