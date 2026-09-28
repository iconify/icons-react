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
		"content": `<style>.fzhbw2bat {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 6H19V19C19 21.2091 17.2091 23 15 23H9C6.79086 23 5 21.2091 5 19V6Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q6kgkmb1h {
  d: path("M10 2L14 2M4 7L20 7M10 11L10 18M14 11L14 18");
}
</style><g class="nrj6p8qat"><path class="fzhbw2bat"/><path class="q6kgkmb1h"/></g>`,
		"fallback": "keyline-icons:bin-2-duotone",
	});
}

export default Component;
