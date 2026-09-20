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
		"content": `<style>.dn04bzn7v {
  d: path("M14 10a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1");
}

.ghov41jrt {
  d: path("M11.026 5.232a1 1 0 0 1 1.409.128l3.333 4a1 1 0 0 1-1.536 1.28l-3.334-4a1 1 0 0 1 .128-1.408");
}

.lzak5bonm {
  d: path("M11.026 14.768a1 1 0 0 1-.128-1.408l3.334-4a1 1 0 0 1 1.536 1.28l-3.333 4a1 1 0 0 1-1.409.128");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="ghov41jrt"/><path class="lzak5bonm"/><path class="dn04bzn7v"/></g>`,
		"fallback": "pepicons-pop:arrow-right",
	});
}

export default Component;
