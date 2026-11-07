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

.eybkp_bkn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M17 2h2a3 3 0 0 1 3 3v2c0 .796-.316 1.559-.879 2.121A3 3 0 0 1 19 10h-2a3 3 0 0 1-3-3V5c0-.796.316-1.56.88-2.122A3 3 0 0 1 17 2M5 5h2a3 3 0 0 1 3 3v2c0 .796-.316 1.559-.879 2.121A3 3 0 0 1 7 13H5c-.796 0-1.56-.316-2.122-.88A3 3 0 0 1 2 10V8a3 3 0 0 1 3-3m0 9h2a3 3 0 0 1 3 3v2c0 .796-.316 1.56-.88 2.122A3 3 0 0 1 7 22H5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3m6 5v-2c0-.796.316-1.559.879-2.121A3 3 0 0 1 14 14h2a2.997 2.997 0 0 1 3 3v2c0 .796-.316 1.56-.88 2.122A3 3 0 0 1 16 22h-2a3 3 0 0 1-3-3");
}

.mntse1b9k {
  d: path("M14 5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3Z");
}
</style><g class="cuyn6tgcc"><path class="eybkp_bkn"/><path class="mntse1b9k"/></g>`,
		"fallback": "coolicons:blocks-bulk-round",
	});
}

export default Component;
