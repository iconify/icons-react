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
		"content": `<style>.bs89-lxci {
  d: path("M240 104L56 168V40Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.stw_n3rqd {
  d: path("m242.63 96.44l-184-64A8 8 0 0 0 48 40v176a8 8 0 0 0 16 0v-42.31l178.63-62.13a8 8 0 0 0 0-15.12M64 156.75V51.25L215.65 104Z");
}
</style><g class="cuyn6tgcc"><path class="bs89-lxci"/><path class="stw_n3rqd"/></g>`,
		"fallback": "ph:flag-pennant-duotone",
	});
}

export default Component;
