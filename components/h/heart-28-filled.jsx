import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n369pwbyt {
  fill: currentColor;
  d: path("M14.604 6.193a6.519 6.519 0 1 1 9.509 8.913l-9.58 9.672a.75.75 0 0 1-1.066 0l-9.58-9.672a6.52 6.52 0 0 1-.263-8.892c2.588-2.943 7.17-2.953 9.772-.021l.604.68z");
}
</style><path class="n369pwbyt"/>`,
		"fallback": "fluent:heart-28-filled",
	});
}

export default Component;
