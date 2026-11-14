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
		"content": `<style>.c8beolbrg {
  d: path("M17.127 7.227L4.399 19.955l-.708-3.536L15.005 5.106");
}

.hyk-8yb9a {
  d: path("M15.005 5.106a3 3 0 0 1 4.243 4.242");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c8beolbrg"/><path class="hyk-8yb9a"/></g>`,
		"fallback": "uix-sharp:hive-tool",
	});
}

export default Component;
