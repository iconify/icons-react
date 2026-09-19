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
		"content": `<style>.dm_99491l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.78 14.26l9.74 9.762L24 43.5l-9.74-9.761z");
}

.gdwmkibqt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.359 26.656l-.26-5.584l-6.818-6.833L24.042 4.5l9.739 9.761z");
}
</style><path class="dm_99491l"/><path class="gdwmkibqt"/>`,
		"fallback": "arcticons:filmorago",
	});
}

export default Component;
