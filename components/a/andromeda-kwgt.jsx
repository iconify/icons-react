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
		"content": `<style>.jl22khb8m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.494 27.656L24 18.219L12.437 42.5H5.499L24 5.5l10.94 21.877m4.364 8.729L42.5 42.5h-6.938l-2.839-5.962");
}

.oel6fjn7l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.112 29.679l-1.15 4.599l-1.149-4.599l-1.15 4.599l-1.15-4.599m8.952 1.555a1.557 1.557 0 0 0-1.609-1.552a1.62 1.62 0 0 0-1.436 1.609v1.436a1.545 1.545 0 0 0 1.551 1.551a1.545 1.545 0 0 0 1.551-1.551h-1.55m2.332-3.048h3.047m-1.496 4.599v-4.599m-15.121 0v4.599m2.47-.001l-1.897-2.3l1.897-2.299m-1.897 2.301h-.573");
}
</style><path class="jl22khb8m"/><path class="oel6fjn7l"/>`,
		"fallback": "arcticons:andromeda-kwgt",
	});
}

export default Component;
