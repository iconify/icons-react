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

.w-zgtt-1c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.905 6.948l.124 29.653m13.099-2.212V15.645l8.734 11.785l8.66-11.183l.344 19.713m-30.879-9.482l13.141-2.051");
}
</style><circle class="cpk0fnbgt"/><path class="w-zgtt-1c"/>`,
		"fallback": "arcticons:hmanager",
	});
}

export default Component;
