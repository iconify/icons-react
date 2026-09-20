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
		"content": `<style>.b0acwmbzg {
  d: path("M41.3 109V24h5.2v49.3h.6L91.9 24h7l-37 40.3L98.5 109H92L58.6 68L46.5 81.2V109z");
}

.e_ezxwzva {
  width: 128px;
  height: 128px;
  x: 2px;
  y: 2px;
  fill: var(--svg-color--fff, #fff);
  stroke: var(--svg-color--121212, #121212);
  stroke-width: var(--svg-stroke-width--4px, 4px);
  rx: 16px;
}
</style><g transform="translate(2 2)scale(.21212)"><rect class="e_ezxwzva"/><path class="b0acwmbzg"/></g>`,
		"fallback": "vscode-icons:file-type-kysely",
	});
}

export default Component;
