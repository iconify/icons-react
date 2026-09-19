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

.f1vmqx5ss {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.3 18.1l3.7 6.2l7.3-.4l-4.8 5.4l2.9 6.8l-6.6-3.1l-5.6 4.9l.6-7.3l-6.1-3.7l7.1-1.6zm14.1-8.4l-.4 3.5l2.7 1.7l-3.1.5l-1 3.2l-1.6-2.8l-3.3.1l2.2-2.4l-1.1-3.1l3.1 1.5z");
}
</style><path class="f1vmqx5ss"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:anki-editor",
	});
}

export default Component;
