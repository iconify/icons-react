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

.mepwg219h {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 10h-9a.997.997 0 0 0-1 1v10a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1");
}

.zjdsmw-9f {
  d: path("M7 3a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm8 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0ZM4 8h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2m9.889 4h1.333c.765 0 1.581.357 1.838 1.128l.444 1.334c.239.716-.195 1.42-.686 1.912l-.182.182l.808.808l.182-.182c.492-.491 1.196-.925 1.912-.686l1.334.444c.771.257 1.128 1.073 1.128 1.838v1.333A1.89 1.89 0 0 1 20.111 22a8 8 0 0 1-3.157-.638a8 8 0 0 1-2.578-1.738a8 8 0 0 1-1.738-2.578A8 8 0 0 1 12 13.889A1.89 1.89 0 0 1 13.889 12");
}
</style><g class="cuyn6tgcc"><path class="mepwg219h"/><path class="zjdsmw-9f"/></g>`,
		"fallback": "coolicons:calendar-phone-corner-bulk",
	});
}

export default Component;
