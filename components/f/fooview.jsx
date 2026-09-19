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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.k4rpemduk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.998 2.71c-.512 1.01-.553 6.24 0 7.101m10.508-5.963c-.983.993-2.481 5.268-2.545 6.523m8.938 9.489c1.749.392 6.135-2.741 6.08-3.815M16.292 36.281c-.572 2.219-3.122 5.067-4.483 5.43");
}

.qtgsqktdi {
  cx: 24px;
  cy: 24px;
  r: 14.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><circle class="cpk0fnbgt"/><circle class="qtgsqktdi"/><path class="k4rpemduk"/>`,
		"fallback": "arcticons:fooview",
	});
}

export default Component;
