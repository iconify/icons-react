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
		"content": `<style>.bi19yib5p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.745 13.755C9.087 13.755 4.5 18.342 4.5 24s4.587 10.245 10.245 10.245h18.51C38.913 34.245 43.5 29.658 43.5 24s-4.587-10.245-10.246-10.245z");
}

.kjll4rsur {
  cx: 33.255px;
  cy: 24px;
  r: 6.896px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="kjll4rsur"/><path class="bi19yib5p"/>`,
		"fallback": "arcticons:earnin",
	});
}

export default Component;
