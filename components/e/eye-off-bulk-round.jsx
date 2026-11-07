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

.pb_whea6u {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M18.429 14.186L9.53 5.287a10.75 10.75 0 0 1 12.393 6.328a1 1 0 0 1 0 .77a10.8 10.8 0 0 1-2.079 3.217ZM6.508 6.508l10.984 10.984a10.752 10.752 0 0 1-15.415-5.107a1 1 0 0 1 0-.77a10.74 10.74 0 0 1 4.431-5.107");
}

.xnyyw46du {
  d: path("m2.707 1.293l20 20a.999.999 0 1 1-1.414 1.414l-8-8a3 3 0 0 1-4-4l-8-8a.999.999 0 1 1 1.414-1.414");
}
</style><g class="cuyn6tgcc"><path class="pb_whea6u"/><path class="xnyyw46du"/></g>`,
		"fallback": "coolicons:eye-off-bulk-round",
	});
}

export default Component;
