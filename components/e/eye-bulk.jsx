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

.pj3o0mbiu {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2.077 11.615a10.75 10.75 0 0 1 19.846 0a1 1 0 0 1 0 .77a10.75 10.75 0 0 1-19.846 0a1 1 0 0 1 0-.77");
}

.x2h4g4vyz {
  d: path("M9.236 10.832a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338m2.057 1.875a.999.999 0 1 0 1.414-1.414a.999.999 0 1 0-1.414 1.414");
}
</style><g class="cuyn6tgcc"><path class="pj3o0mbiu"/><path class="x2h4g4vyz"/></g>`,
		"fallback": "coolicons:eye-bulk",
	});
}

export default Component;
