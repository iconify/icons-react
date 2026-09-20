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
		"content": `<style>.ju6ht4b4e {
  fill: currentColor;
  d: path("m18 22l-1.425-1.425l1.6-1.575H14v-2h4.175L16.6 15.4L18 14l4 4zM3 21v-6h2v4h4v2zM3 9V3h6v2H5v4zm16 0V5h-4V3h6v6z");
}
</style><path class="ju6ht4b4e"/>`,
		"fallback": "material-symbols:display-external-input-sharp",
	});
}

export default Component;
