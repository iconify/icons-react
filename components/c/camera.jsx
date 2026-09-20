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
		"content": `<style>.f04__s8av {
  d: path("M11.5 4h-7a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-8 3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1z");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.ysrqq4s0d {
  d: path("m16.934 5.176l-3.468 2.381a1 1 0 0 0-.434.815L13 11.587a1 1 0 0 0 .434.834l3.5 2.403A1 1 0 0 0 18.5 14V6a1 1 0 0 0-1.566-.824M16.5 12.1l-1.495-1.026l.022-2.163L16.5 7.9z");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="f04__s8av"/><path class="ysrqq4s0d"/></g>`,
		"fallback": "pepicons-pop:camera",
	});
}

export default Component;
