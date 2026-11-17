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
		"content": `<style>.i1my1kbvr {
  fill: currentColor;
  d: path("m12.514 2.143l5 3q.168.1.286.257l3 4a1 1 0 0 1 .2.6v10a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2V10a1 1 0 0 1 .2-.6l3-4q.118-.156.286-.257l5-3a.99.99 0 0 1 1.028 0M12 12a2 2 0 1 0 .001-3.999A2 2 0 0 0 12 12m3 4H9v4h6Z");
}
</style><path class="i1my1kbvr"/>`,
		"fallback": "coolicons:barn-fill-sharp",
	});
}

export default Component;
