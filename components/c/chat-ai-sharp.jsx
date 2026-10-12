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
		"content": `<style>.of-opo7ro {
  d: path("M12 7.25q.51 3.74 4.25 4.25q-3.74.51-4.25 4.25q-.51-3.74-4.25-4.25q3.74-.51 4.25-4.25Z");
}

.tnqfgxb0e {
  d: path("M12 3.25c5.1 0 9.25 3.6 9.25 8.25S17.1 19.75 12 19.75h-1.75L8.6 19.2l-4.25 1.6l-.959.354l.309-.974l1.15-3.6c-1.25-1.38-2.1-3.13-2.1-5.08c0-4.65 4.15-8.25 9.25-8.25Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="tnqfgxb0e"/><path class="of-opo7ro"/></g>`,
		"fallback": "iconoven:chat-ai-sharp",
	});
}

export default Component;
