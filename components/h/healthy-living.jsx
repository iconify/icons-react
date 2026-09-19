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
		"content": `<style>.dqtj7fb4s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.501 2.553C36.765 3.34 45.501 12.709 45.5 24c0 11.29-8.733 20.657-19.996 21.447m-3.008 0C11.233 44.657 2.5 35.29 2.5 24S11.233 3.343 22.496 2.553");
}

.qscz58b0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.83 22.497A14.25 14.25 0 0 1 24 9.75A14.25 14.25 0 0 1 38.171 22.5m0 3.003A14.25 14.25 0 0 1 24 38.25A14.25 14.25 0 0 1 9.829 25.503");
}

.wwgfsmn5v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.5 30.062A7 7 0 1 1 31 24h-8.5");
}
</style><path class="dqtj7fb4s"/><path class="qscz58b0k"/><path class="wwgfsmn5v"/>`,
		"fallback": "arcticons:healthy-living",
	});
}

export default Component;
