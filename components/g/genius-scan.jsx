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

.uuo65mbbu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m15.728 11.675l28.485 4.982m-26.242-13.3l-8.208 30.44m-5.265-.74l29.855 4.193m-.062 5.632l.308-27.907");
}
</style><circle class="cpk0fnbgt"/><path class="uuo65mbbu"/>`,
		"fallback": "arcticons:genius-scan",
	});
}

export default Component;
