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
		"content": `<style>.ivsfbfbzp {
  d: path("m6.75 11l-2.5 3v3.5L7.5 15m3 3v3.5M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.qubqojbxw {
  d: path("M12.02 15H7.5C6.25 9.5 7 5 10.5 2.5c3.098 2.213 4.041 5.993 3.35 10.646m.4-2.146l1.024 1.229");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qubqojbxw"/><path class="ivsfbfbzp"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:ico",
	});
}

export default Component;
