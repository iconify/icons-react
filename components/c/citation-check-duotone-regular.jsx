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
		"content": `<style>.c4axibc2h {
  d: path("M8 3v4");
}

.euq2huu8d {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 3v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fyea5htjc {
  d: path("M4 3v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qi9dmy_br {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 3v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uo9ro-b5p {
  d: path("m4 14 5 5L20 8");
}

.uyjm3pbni {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m4 14 5 5L20 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="euq2huu8d"/><path class="qi9dmy_br"/><path class="uyjm3pbni"/><path class="fyea5htjc"/><path class="c4axibc2h"/><path class="uo9ro-b5p"/></g>`,
		"fallback": "iconmind:citation-check-duotone-regular",
	});
}

export default Component;
