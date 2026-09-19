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
		"content": `<style>.u5chcobci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8 8a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4zm13.599 23.981h5.768m-5.768-11.536h5.768m-5.768 5.768h3.76m-3.76-5.768v11.536");
}

.x_w7mebum {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.071 17.55l3.874 5.785l-3.874 5.785m7.749-11.57l-3.875 5.785l3.875 5.785M10.18 17.561h8.714m-4.357 11.548V17.561m4.357 0v1.561m-8.714-1.561v1.561");
}
</style><path class="u5chcobci"/><path class="x_w7mebum"/>`,
		"fallback": "arcticons:detexify",
	});
}

export default Component;
