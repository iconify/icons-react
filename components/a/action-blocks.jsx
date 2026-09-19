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
		"content": `<style>.d663pubwc {
  cx: 14.1px;
  cy: 25px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.db5vo8boz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.1 32c.2 2.8 3.3 5 7.1 5s6.8-2.2 7.1-5z");
}

.sk_3m0bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 32.1V7.5c0-1.1-.9-2-2-2H15.9c-.4 0-.8.2-1.1.5L6 14.8c-.3.3-.5.7-.5 1.1v24.6c0 1.1.9 2 2 2h24.6c.4 0 .8-.2 1.1-.5l8.8-8.8c.3-.2.5-.6.5-1.1");
}

.uwvnvhc6c {
  cx: 24.2px;
  cy: 25px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vaccb2loz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.8 42V15.2H6m9.2-9.4v9.1m17.6 17.9h9.1m-9.1-17.6l9.1-9.1");
}
</style><path class="vaccb2loz"/><path class="sk_3m0bjh"/><path class="db5vo8boz"/><circle class="d663pubwc"/><circle class="uwvnvhc6c"/>`,
		"fallback": "arcticons:action-blocks",
	});
}

export default Component;
