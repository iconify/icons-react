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

.odthb3bgb {
  d: path("M13 12a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm-4 5a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0Zm4 0a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0Z");
}

.zdfwg2bfk {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 21c-1.265 0-2.164-1.076-2.167-2.298a2.5 2.5 0 0 1 .273-1.149l2-4C6.643 12.478 7.652 11.001 9 11h6c1.348.001 2.357 1.478 2.894 2.553l2 4c.181.356.274.75.273 1.149C20.164 19.924 19.265 21 18 21Z");
}
</style><g class="cuyn6tgcc"><path class="zdfwg2bfk"/><path class="odthb3bgb"/></g>`,
		"fallback": "coolicons:broom-bulk-round",
	});
}

export default Component;
