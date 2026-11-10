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

.eetyfw_cw {
  d: path("M16.485 12.99C16.863 12.99 17.241 13.27 17.411 13.6C17.514 13.91 17.483 14.32 17.285 14.59L12.8 20.58C12.655 20.78 12.28 20.95 12.049 21C11.778 20.97 11.363 20.8 11.198 20.58L6.711 14.59C6.485 14.29 6.448 13.88 6.617 13.54C6.787 13.2 7.134 12.99 7.512 12.99H16.485ZM15.999 6V7.99H7.999V6H15.999Z");
}

.rcu75nb0t {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 3C7.209 3 9 4.79 9 7C9 9.2 7.209 10.99 5 10.99C2.791 10.99 1 9.2 1 7C1 4.79 2.791 3 5 3ZM19 3C21.209 3 23 4.79 23 7C23 9.2 21.209 10.99 19 10.99C16.791 10.99 15 9.2 15 7C15 4.79 16.791 3 19 3Z");
}
</style><g class="cuyn6tgcc"><path class="rcu75nb0t"/><path class="eetyfw_cw"/></g>`,
		"fallback": "keyline-icons:guidepoint-arrow-down-sharp-duotone",
	});
}

export default Component;
