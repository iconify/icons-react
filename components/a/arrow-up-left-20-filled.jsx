import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yqoch0btr {
  fill: currentColor;
  d: path("M12 3.75a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0V5.56l11.219 11.22a.75.75 0 0 0 1.06-1.062L5.561 4.5h5.689a.75.75 0 0 0 .75-.75");
}
</style><path class="yqoch0btr"/>`,
		"fallback": "fluent:arrow-up-left-20-filled",
	});
}

export default Component;
