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
		"content": `<style>.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.nppdo5v7m {
  d: path("M20 5a2 2 0 0 0-2.323-1.974L9.838 4.31A1 1 0 0 0 9 5.297V17a1 1 0 0 0 1.155.988l8.154-1.276A2 2 0 0 0 20 14.737zm-2 9.737l-7 1.094V6.147L18 5z");
}

.q5p36befo {
  d: path("M11 5.297a1 1 0 0 0-.838-.987L2.323 3.026A2 2 0 0 0 0 5v9.737a2 2 0 0 0 1.69 1.975l8.155 1.276A1 1 0 0 0 11 17zm-9 9.44V5l7 1.147v9.684z");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="q5p36befo"/><path class="nppdo5v7m"/></g>`,
		"fallback": "pepicons-pop:book",
	});
}

export default Component;
