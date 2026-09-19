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
		"content": `<style>.eg-qjse3q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m7.28 9.854l3.881-3.88a1.62 1.62 0 0 1 2.287 0l11.08 11.079l-9.322 9.321l-7.926-7.926a6.08 6.08 0 0 1 0-8.594");
}

.gajc4bb2a {
  cx: 33.849px;
  cy: 17.053px;
  r: 2.302px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.t7_zlxdro {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.527 17.053l9.321 9.321l-9.321 9.322l-8.706-8.706a.87.87 0 0 1 0-1.231z");
}

.v1c02lb3p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m38.145 12.03l3.881 3.88a1.62 1.62 0 0 1 0 2.287l-8.178 8.178l-9.321-9.322l5.024-5.024a6.08 6.08 0 0 1 8.594 0ZM10.91 40.72l-3.882-3.88a1.62 1.62 0 0 1 0-2.287l8.178-8.178l9.321 9.321l-5.024 5.025a6.08 6.08 0 0 1-8.594 0Z");
}
</style><path class="t7_zlxdro"/><path class="v1c02lb3p"/><path class="eg-qjse3q"/><circle class="gajc4bb2a"/>`,
		"fallback": "arcticons:aves",
	});
}

export default Component;
