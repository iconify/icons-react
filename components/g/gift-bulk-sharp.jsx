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

.fqd7mobad {
  d: path("M11 6.091a3.5 3.5 0 0 1-.02-1.053a1.551 1.551 0 0 0-3.029.413a1.55 1.55 0 0 0 1.243 1.568h.002A1 1 0 0 1 8.999 9c-.139 0-.275-.034-.408-.069a3.54 3.54 0 0 1-2.044-1.462A3.552 3.552 0 0 1 12 2.979a3.55 3.55 0 1 1 3.196 6.002a1 1 0 0 1-.803-.187a1 1 0 0 1 .411-1.775h.001a1.55 1.55 0 1 0-1.785-1.981c.047.35.04.705-.02 1.053V13h8a1 1 0 0 1 0 2h-8v5a1 1 0 0 1-2 0v-5H3a1 1 0 0 1 0-2h8Z");
}

.nau3f9luo {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 7h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="nau3f9luo"/><path class="fqd7mobad"/></g>`,
		"fallback": "coolicons:gift-bulk-sharp",
	});
}

export default Component;
