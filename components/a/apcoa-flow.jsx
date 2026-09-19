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
		"content": `<style>.m6m1n3upe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.239 9.484h30.638l-2.157 9.25H9.118zm-2.121 9.25h30.639l-2.157 9.25H6.998zm-2.12 9.25h16.574l-2.312 9.25H4.877z");
}
</style><path class="m6m1n3upe"/>`,
		"fallback": "arcticons:apcoa-flow",
	});
}

export default Component;
