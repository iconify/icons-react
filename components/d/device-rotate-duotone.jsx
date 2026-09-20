import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bhrijxroo {
  d: path("M192 56v144a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.i09f2db3o {
  d: path("m205.66 221.66l-24 24a8 8 0 0 1-11.32-11.32L180.69 224H80a24 24 0 0 1-24-24v-96a8 8 0 0 1 16 0v96a8 8 0 0 0 8 8h100.69l-10.35-10.34a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32M80 72a8 8 0 0 0 5.66-13.66L75.31 48H176a8 8 0 0 1 8 8v96a8 8 0 0 0 16 0V56a24 24 0 0 0-24-24H75.31l10.35-10.34a8 8 0 1 0-11.32-11.32l-24 24a8 8 0 0 0 0 11.32l24 24A8 8 0 0 0 80 72");
}
</style><g class="cuyn6tgcc"><path class="bhrijxroo"/><path class="i09f2db3o"/></g>`,
		"fallback": "ph:device-rotate-duotone",
	});
}

export default Component;
