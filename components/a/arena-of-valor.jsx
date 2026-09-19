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
		"content": `<style>.d6kt9nbvl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.79 24L24 17.247L21.21 24L24 30.753zm2.446 0H26.79M24 17.247l-3.165-6.6M18.764 24h2.446M24 30.753l3.165 6.6");
}

.qibu3ib6l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 44.5C21.806 37.75 13.833 24.278 9.778 24C13.833 23.722 21.806 10.25 24 3.5c2.194 6.75 10.167 20.222 14.222 20.5c-4.055.278-12.028 13.75-14.222 20.5");
}
</style><path class="qibu3ib6l"/><path class="d6kt9nbvl"/>`,
		"fallback": "arcticons:arena-of-valor",
	});
}

export default Component;
