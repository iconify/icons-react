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
		"content": `<style>.cvy6jmb1f {
  fill: currentColor;
  d: path("M14.62 12.023a4 4 0 1 1 1.354-3.484c.356 1.81.352 3.967-.464 5.9c-.862 2.04-2.601 3.76-5.57 4.537a.75.75 0 1 1-.38-1.451c2.531-.663 3.892-2.07 4.568-3.67a7.2 7.2 0 0 0 .492-1.832");
}
</style><path class="cvy6jmb1f"/>`,
		"fallback": "fluent:comma-24-regular",
	});
}

export default Component;
