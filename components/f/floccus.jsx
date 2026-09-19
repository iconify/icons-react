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
		"content": `<style>.aalwf56de {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.26 26.434l4.648 4.596l7.478-9.564");
}

.l5eeusbmt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.783 35.573h23.98c13.015 0 10.837-19.586-2.216-15.243c0-10.876-19.586-10.876-19.586 2.178C2.073 20.33 2.073 35.574 10.783 35.574Z");
}
</style><path class="l5eeusbmt"/><path class="aalwf56de"/>`,
		"fallback": "arcticons:floccus",
	});
}

export default Component;
