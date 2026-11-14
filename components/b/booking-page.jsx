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
		"content": `<style>.juoe7ubkp {
  d: path("M6.5 6.5h11v8h-11Zm3-1.25v2.5m5-2.5v2.5");
}

.kfj-2om_c {
  d: path("M10.5 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ncev7ghqi {
  d: path("M2.5 2.5h19v15h-19Zm9.5 15V21m-4 0h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ncev7ghqi"/><path class="juoe7ubkp"/><path class="kfj-2om_c"/></g>`,
		"fallback": "uix-sharp:booking-page",
	});
}

export default Component;
