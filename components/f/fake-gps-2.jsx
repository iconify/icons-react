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
		"content": `<style>.bds5-kbrp {
  fill: none;
  stroke: currentColor;
  stroke-dasharray: 3.986 3.986;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.66 39.392c-4.204-4.48-9.948-12.147-9.948-20.604C9.712 10.897 16.11 4.5 24 4.5s14.288 6.397 14.288 14.288c0 9.435-7.15 17.888-11.334 22.027");
}

.irpodniek {
  cx: 24px;
  cy: 18.788px;
  r: 6px;
  fill: none;
  stroke: currentColor;
  stroke-dasharray: 3.764 3.764;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pu5p_cboh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.507 42.19C24.58 43.039 24 43.5 24 43.5s-.58-.462-1.507-1.31");
}
</style><path class="pu5p_cboh"/><path class="bds5-kbrp"/><circle class="irpodniek"/>`,
		"fallback": "arcticons:fake-gps-2",
	});
}

export default Component;
