import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r_lk29b5z {
  cx: 16px;
  cy: 16px;
  r: 14px;
  fill: var(--svg-color--e0f2f1, #e0f2f1);
}

.rfv-l7b2u {
  fill: var(--svg-color--22a079, #22a079);
  d: path("M3.591 18.177a12.6 12.6 0 0 0 23.481 3.842l-14.856-9.161Z");
}

.voi8iykxx {
  fill: var(--svg-color--e0f2f1, #e0f2f1);
  d: path("M23.518 5.888A12.6 12.6 0 0 0 5.654 8.811l6.562 4.047Z");
}

.x0ltyeidq {
  fill: var(--svg-color--8bc34a, #8bc34a);
  d: path("m3.591 18.177l8.625-5.319l-6.562-4.047A12.54 12.54 0 0 0 3.4 16a12.7 12.7 0 0 0 .191 2.177");
}

.z0a4fbces {
  fill: var(--svg-color--3dafa4, #3dafa4);
  d: path("M27.072 22.019a12.61 12.61 0 0 0-3.554-16.131l-11.3 6.97Z");
}
</style><circle class="r_lk29b5z"/><path class="voi8iykxx"/><path class="x0ltyeidq"/><path class="z0a4fbces"/><path class="rfv-l7b2u"/>`,
		"fallback": "vscode-icons:file-type-xmake",
	});
}

export default Component;
