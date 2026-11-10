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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.n2h0ffwrm {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9 2C9.629 2 10.222 2.3 10.6 2.8L15.4 9.2C16.439 10.58 17 12.27 17 14C17 18.42 13.418 22 9 22C4.582 22 1 18.42 1 14C1 12.27 1.561 10.58 2.6 9.2L7.4 2.8C7.778 2.3 8.371 2 9 2Z");
}

.ov9hsvb_w {
  fill-rule: evenodd;
  d: path("M20 2C21.657 2 23 3.34 23 5C23 6.66 21.657 8 20 8C18.343 8 17 6.66 17 5C17 3.34 18.343 2 20 2ZM20 4C19.448 4 19 4.45 19 5C19 5.55 19.448 6 20 6C20.552 6 21 5.55 21 5C21 4.45 20.552 4 20 4Z");
}
</style><g class="cuyn6tgcc"><path class="n2h0ffwrm"/><path clip-rule="evenodd" class="ov9hsvb_w"/></g>`,
		"fallback": "keyline-icons:droplet-degree-sharp-duotone",
	});
}

export default Component;
