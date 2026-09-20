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
		"content": `<style>.dx3y82b7n {
  fill: currentColor;
  d: path("M12.096 16.714L5 9.616v5.287H4v-7h7v1H5.708l6.388 6.388l7.216-7.215l.707.714z");
}
</style><path class="dx3y82b7n"/>`,
		"fallback": "material-symbols-light:call-missed",
	});
}

export default Component;
