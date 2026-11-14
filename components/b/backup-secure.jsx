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
		"content": `<style>.dm_wopyrf {
  d: path("M16.5 17.5v-1a1.5 1.5 0 0 1 3 0v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w6ibsv53h {
  d: path("M12.2 17.5H2.5V4h17v8.5m-17-1h17M6 14.5h.01m8.99 3h6v4h-6Z");
}
</style><g class="ulnmmdpxh"><path class="w6ibsv53h"/><path class="dm_wopyrf"/></g>`,
		"fallback": "uix-sharp:backup-secure",
	});
}

export default Component;
