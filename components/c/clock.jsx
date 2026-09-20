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
		"content": `<style>.azvp3tbjv {
  d: path("M10 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1");
}

.hoqgz_bdr {
  d: path("M10 4a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0a8 8 0 0 1-16 0");
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.s20qt4bne {
  d: path("M14 10a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1");
}
</style><g clip-rule="evenodd" class="n1lsf0bnc"><path class="hoqgz_bdr"/><path class="azvp3tbjv"/><path class="s20qt4bne"/></g>`,
		"fallback": "pepicons-pop:clock",
	});
}

export default Component;
