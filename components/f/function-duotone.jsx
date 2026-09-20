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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.gz_wol42f {
  d: path("M208 40a8 8 0 0 1-8 8h-29.29a24 24 0 0 0-23.62 19.71l-9.5 52.29H184a8 8 0 0 1 0 16h-49.32l-10 55.16A40 40 0 0 1 85.29 224H56a8 8 0 0 1 0-16h29.29a24 24 0 0 0 23.62-19.71l9.5-52.29H72a8 8 0 0 1 0-16h49.32l10-55.16A40 40 0 0 1 170.71 32H200a8 8 0 0 1 8 8");
}

.rdgw364gf {
  d: path("M200 40v160a16 16 0 0 1-16 16H56V56a16 16 0 0 1 16-16Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="rdgw364gf"/><path class="gz_wol42f"/></g>`,
		"fallback": "ph:function-duotone",
	});
}

export default Component;
