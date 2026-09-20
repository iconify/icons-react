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
		"content": `<style>.tm4zg9bsz {
  fill: currentColor;
  d: path("M8 22q-.425 0-.712-.288T7 21V5q0-.425.288-.712T8 4h2V2h4v2h2q.425 0 .713.288T17 5v3h-2V6H9v14h6v-2h2v3q0 .425-.288.713T16 22zm2-5v-3q0-.825.588-1.412T12 12h4.175L14.6 10.4L16 9l4 4l-4 4l-1.425-1.425l1.6-1.575H12v3z");
}
</style><path class="tm4zg9bsz"/>`,
		"fallback": "material-symbols:battery-share-outline",
	});
}

export default Component;
