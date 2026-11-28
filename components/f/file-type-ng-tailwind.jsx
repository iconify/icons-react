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
		"content": `<style>.agpxd1fph {
  fill: var(--svg-color--44a8b3, #44a8b3);
  d: path("M16 23a4.73 4.73 0 0 1 5-4c4 0 4.5 3 6.5 3.5A3.2 3.2 0 0 0 31 21a4.73 4.73 0 0 1-5 4c-4 0-4.5-3-6.5-3.5A3.2 3.2 0 0 0 16 23m-5 6a4.73 4.73 0 0 1 5-4c4 0 4.5 3 6.5 3.5A3.2 3.2 0 0 0 26 27a4.73 4.73 0 0 1-5 4c-4 0-4.5-3-6.5-3.5A3.2 3.2 0 0 0 11 29");
}

.d8vhchb-r {
  fill: var(--svg-color--c3002f, #c3002f);
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("m29.24 6.66l-.96 15.01l-9.14-19.69zm-6.33 19.41L16 30.01l-6.9-3.94l1.4-3.4h11zM16 9.46l3.62 8.8h-7.24zM3.7 21.67L2.77 6.66l10.1-4.67z");
}

.q_xxb5i9i {
  stop-color: var(--svg-color--dd0031, #dd0031);
}

.qvdjvbboh {
  d: path("m222.08 39.2l-8.02 125.91L137.4 0zM168.98 202l-57.94 33.06L53.11 202l11.78-28.55h92.3zM111.04 62.67l30.36 73.8H80.68zM7.94 165.11L.01 39.2L84.7 0z");
}

.y-da_dbrl {
  stop-color: var(--svg-color--c3002f, #c3002f);
}
</style><g transform="matrix(.96 0 0 .96 .22 .16)"><defs><linearGradient id="SVGIiKdMcKI"><stop offset="0" class="q_xxb5i9i"/><stop offset="1" class="y-da_dbrl"/></linearGradient></defs><path fill="url(#SVGIiKdMcKI)" transform="translate(2.76 1.99)scale(.11923)" class="qvdjvbboh"/><path class="d8vhchb-r"/><path class="agpxd1fph"/></g>`,
		"fallback": "vscode-icons:file-type-ng-tailwind",
	});
}

export default Component;
