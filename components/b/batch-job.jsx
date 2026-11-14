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
		"content": `<style>.bg8_h7g_f {
  d: path("M12.2 21.5H2.5v-12h16v3.7m-14-6.7h12m-10-3h8");
}

.gtg72fbwi {
  d: path("m15 14.5l6.5 3.5l-6.5 3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bg8_h7g_f"/><path class="gtg72fbwi"/></g>`,
		"fallback": "uix-sharp:batch-job",
	});
}

export default Component;
