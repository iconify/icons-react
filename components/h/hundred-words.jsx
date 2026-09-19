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
		"content": `<style>.yy2rgmbpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.126 23.692V5.196h12.82v16.646m0 4.624v16.338h-12.82V28.546m17.554-7.783V5.196H42.5v13.333m0 4.777v19.498H29.68V25.387M5.5 5.22v19.793m0 4.932v12.858");
}
</style><path class="yy2rgmbpv"/>`,
		"fallback": "arcticons:hundred-words",
	});
}

export default Component;
