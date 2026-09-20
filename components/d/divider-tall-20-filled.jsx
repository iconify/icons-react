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
		"content": `<style>.vpcy3eezg {
  fill: currentColor;
  d: path("M9.75 1a.75.75 0 0 1 .75.75v16.5a.75.75 0 0 1-1.5 0V1.75A.75.75 0 0 1 9.75 1");
}
</style><path class="vpcy3eezg"/>`,
		"fallback": "fluent:divider-tall-20-filled",
	});
}

export default Component;
