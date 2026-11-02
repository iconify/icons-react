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
		"content": `<style>.doaj1tf4c {
  d: path("M4 8v12h6V8Zm10 0v8h6V8Z");
}

.n3jb7-bgm {
  stroke-opacity: 0.4;
  d: path("M3 4h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="n3jb7-bgm"/><path class="doaj1tf4c"/></g>`,
		"fallback": "coolicons:align-top-duocolor-sharp",
	});
}

export default Component;
