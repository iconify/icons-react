import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c8iz87bew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.67 35.42h9.68c0-8.58 11.16-18 11.9-18H28.43");
}

.h54fp9b-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.6 36.87c0-12.29 16-25.74 17-25.74H20.1c-2 0-15.6 13.45-15.6 25.74Z");
}

.kdnmf5b7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.43 34.14h6.69c0-6 7.85-12.67 8.38-12.67h-7.85");
}
</style><path class="h54fp9b-c"/><path class="c8iz87bew"/><path class="kdnmf5b7o"/>`,
		"fallback": "arcticons:finanzassistent",
	});
}

export default Component;
