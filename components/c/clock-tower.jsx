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
		"content": `<style>.bwayy8peh {
  d: path("M8 21.5V9l4-4.5L16 9v12.5m-4-19v2");
}

.jmy4pabyw {
  d: path("M12 11v1.5h1.25M6 21.5h12");
}

.lyq8hac4w {
  d: path("M9.25 12.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bwayy8peh"/><path class="lyq8hac4w"/><path class="jmy4pabyw"/></g>`,
		"fallback": "uix-sharp:clock-tower",
	});
}

export default Component;
