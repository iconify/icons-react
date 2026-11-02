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

.odbob77_u {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 21a1 1 0 0 1-.894-1.447l4-8A1 1 0 0 1 8 11h8c.379 0 .725.214.894.553l4 8A1 1 0 0 1 20 21Z");
}

.odthb3bgb {
  d: path("M13 12a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm-4 5a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0Zm4 0a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0Z");
}
</style><g class="cuyn6tgcc"><path class="odbob77_u"/><path class="odthb3bgb"/></g>`,
		"fallback": "coolicons:broom-bulk",
	});
}

export default Component;
