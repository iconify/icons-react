import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.aa2fqxiti {
  fill: currentColor;
  d: path("M223.39 99.06A8 8 0 0 1 216 104h-40v88a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h136v-80h-40a8 8 0 0 1-5.66-13.66l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1 1.73 8.72");
}
</style><path class="aa2fqxiti"/>`,
		"fallback": "ph:arrow-elbow-right-up-fill",
	});
}

export default Component;
