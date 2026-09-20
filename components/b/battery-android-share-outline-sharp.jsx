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
		"content": `<style>.d2g4scclh {
  fill: currentColor;
  d: path("m19 8l4 4l-4 4l-1.425-1.425l1.6-1.575H15v3h-2v-5h6.175L17.6 9.4zM1 18V6h17.175l-2 2H3v8h8v2zm2-2V8z");
}
</style><path class="d2g4scclh"/>`,
		"fallback": "material-symbols:battery-android-share-outline-sharp",
	});
}

export default Component;
