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

.hwnq-ct1o {
  d: path("M10 18h9a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1V5a1 1 0 0 1 2 0Z");
}

.m_4_sbc_s {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12.553 10.106a1 1 0 1 1 .894 1.788l-8 4a1 1 0 1 1-.894-1.788Z");
}
</style><g class="cuyn6tgcc"><path class="m_4_sbc_s"/><path class="hwnq-ct1o"/></g>`,
		"fallback": "coolicons:currency-litecoin-bulk",
	});
}

export default Component;
