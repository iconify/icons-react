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
		"content": `<style>.zfr71c_hl {
  fill: currentColor;
  d: path("M6 2a3 3 0 0 0-.5 5.959v3.791a.5.5 0 0 0 1 0V11H12a2.5 2.5 0 0 0 2.5-2.5v-.541a3 3 0 1 0-1 0V8.5A1.5 1.5 0 0 1 12 10H6.5V7.959A3 3 0 0 0 6 2M4.875 13.407a.5.5 0 1 0-.582-.814a3.02 3.02 0 0 0-1.122 1.55a.5.5 0 1 0 .955.297a2 2 0 0 1 .749-1.033m2.903-.814a.5.5 0 1 0-.581.814a2.02 2.02 0 0 1 .748 1.033a.5.5 0 1 0 .955-.297a3 3 0 0 0-1.122-1.55m-3.492 3.413a.5.5 0 0 0-.874.486a3 3 0 0 0 1.381 1.275a.5.5 0 1 0 .414-.91a2 2 0 0 1-.92-.85m4.373.486a.5.5 0 0 0-.874-.486a2 2 0 0 1-.978.875a.5.5 0 1 0 .386.923a3 3 0 0 0 1.466-1.312");
}
</style><path class="zfr71c_hl"/>`,
		"fallback": "fluent:branch-fork-hint-20-filled",
	});
}

export default Component;
