import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v1h43jbgy {
  fill: currentColor;
  d: path("M7 21v-4h7v-4H7V3h10v18zm-3-5v-2h9v2zm8.713-6.288Q13 9.425 13 9t-.288-.712T12 8t-.712.288T11 9t.288.713T12 10t.713-.288M19 9V3h2v6z");
}
</style><path class="v1h43jbgy"/>`,
		"fallback": "material-symbols:door-sensor-sharp",
	});
}

export default Component;
