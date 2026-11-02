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
		"content": `<style>.xxqhixbvg {
  fill: currentColor;
  d: path("M12.293 4.293a2.414 2.414 0 0 1 3.414 0l4 4a2.414 2.414 0 0 1 0 3.414l-6 6a1 1 0 0 1-1.414 0L12 17.414l-3.293 3.293A1 1 0 0 1 8 21H4a2 2 0 0 1-2-2v-2c0-.265.105-.52.293-.707L6.586 12l-.293-.293a.997.997 0 0 1 0-1.414ZM4 17.414V19h3.586l3-3L8 13.414Z");
}
</style><path class="xxqhixbvg"/>`,
		"fallback": "coolicons:highlighter-fill",
	});
}

export default Component;
