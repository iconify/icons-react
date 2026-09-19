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

.l144-pbfq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.955 2.832L2.892 19.895M27.131 2.727L2.727 27.131m29.9-22.829L4.322 32.607M37.07 6.93L6.929 37.071M40.661 10.41L10.41 40.661m34.124-10.269L32.607 18.465m9.717 16.788L29.071 22m10.131 17.202L25.535 25.535m9.717 16.788L22 29.071m8.391 15.463L18.464 32.607");
}
</style><circle class="cpk0fnbgt"/><path class="l144-pbfq"/>`,
		"fallback": "arcticons:hornbach",
	});
}

export default Component;
