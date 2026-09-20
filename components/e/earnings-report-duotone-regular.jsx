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
		"content": `<style>.ggqz7qkuq {
  d: path("m9 15 2 -2 2 2 2 -2");
}

.ksd3u3gio {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 15 2 -2 2 2 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ky4omnbla {
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wo--el8ej {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="wo--el8ej"/><path class="ksd3u3gio"/><path class="ky4omnbla"/><path class="ggqz7qkuq"/></g>`,
		"fallback": "iconmind:earnings-report-duotone-regular",
	});
}

export default Component;
