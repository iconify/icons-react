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
		"content": `<style>.aklenpbrv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.432 26.75l-.013.07c-.538 3.056-3.453 5.534-6.51 5.534s-5.097-2.478-4.558-5.535l.994-5.638c.54-3.057 3.454-5.535 6.51-5.535c3.057 0 5.098 2.478 4.559 5.535l-.012.068M13.973 24h5.43M12.5 32.354l2.946-16.708h8.353");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="j3s9ivbxi"/><path class="aklenpbrv"/>`,
		"fallback": "arcticons:fancode",
	});
}

export default Component;
