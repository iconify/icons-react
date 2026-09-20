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
		"content": `<style>.divmul-dt {
  d: path("M5 11a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7h-2v-7H7v7H5zm.5-6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V3a1 1 0 1 0-2 0v2h-4V3a1 1 0 0 0-2 0z");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.z6uq8wbjl {
  d: path("M1.5 3.5a2 2 0 0 1 2-2h10.586a2 2 0 0 1 1.414.586L17.914 4.5a2 2 0 0 1 .586 1.414V16.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2zm2 0v13h13V5.914L14.086 3.5z");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="z6uq8wbjl"/><path class="divmul-dt"/></g>`,
		"fallback": "pepicons-pop:floppy-disk",
	});
}

export default Component;
