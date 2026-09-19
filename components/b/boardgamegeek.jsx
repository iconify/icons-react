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

.i0wso2blw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.551 33.884l.312-.37l3.146-7.392l-.004-.482l-1.32-1.377l1.096-8.519l-.282-.282l-1.974.592h-.296l2.267-4.94V10.5a3457 3457 0 0 1-16.697 6.151l-.179.134l.926 7.434l-1.555 1.554l4.488 11.205l.323.522l.84-.34z");
}
</style><path class="i0wso2blw"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:boardgamegeek",
	});
}

export default Component;
