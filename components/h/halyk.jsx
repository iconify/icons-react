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
		"content": `<style>.cap0h-bmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.308 20.793V42.5m23.384-21.707V42.5M12.308 31.606h23.384m5.119-13.15L24 5.5L7.189 18.456");
}

.geu0lxbhh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.434 15.859V8.301h-5.553v3.272");
}
</style><path class="cap0h-bmd"/><path class="geu0lxbhh"/>`,
		"fallback": "arcticons:halyk",
	});
}

export default Component;
