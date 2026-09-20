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
		"content": `<style>.m65j_bc8e {
  fill: currentColor;
  d: path("M100 28H64a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h36a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H68V52h28Zm96-176h-36a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h36a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176h-28V52h28Z");
}
</style><path class="m65j_bc8e"/>`,
		"fallback": "ph:columns-bold",
	});
}

export default Component;
