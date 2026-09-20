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
		"content": `<style>.y7o8p5b7r {
  fill: currentColor;
  d: path("m16.5 17.56l4.22 4.22a.75.75 0 0 0 1.06-1.06L3.28 2.22a.75.75 0 1 0-1.06 1.06l8.56 8.56l-4.516 3.839a.75.75 0 1 0 .972 1.143l3.764-3.2v7.628a.75.75 0 0 0 1.28.53zm-3.594-3.593L15.44 16.5l-2.94 2.94v-5.818zm4.33-5.646l-3.099 2.634l-1.064-1.064l2.572-2.186L12.5 4.561v4.757l-1.5-1.5V2.75a.75.75 0 0 1 1.28-.53l5 5a.75.75 0 0 1-.044 1.101");
}
</style><path class="y7o8p5b7r"/>`,
		"fallback": "fluent:bluetooth-disabled-24-regular",
	});
}

export default Component;
