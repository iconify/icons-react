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
		"content": `<style>.w-bog4ldb {
  fill: currentColor;
  d: path("m19.775 22.6l-1.6-1.6H3V5.825L1.4 4.2l1.4-1.4l18.4 18.4zM5 19h11.175L5 7.825zm16-.825l-2-2V8h-8.175l-5-5H21z");
}
</style><path class="w-bog4ldb"/>`,
		"fallback": "material-symbols:ad-off-sharp",
	});
}

export default Component;
