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
		"content": `<style>.gre2p-bxe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.438 18.727s9.03-8.338 12.95-11.972c2.126-1.97 4.517-1.9 6.297-.266L38.731 17.54c3.117 2.695 4.77 5.096 4.77 9.216v8.534a7.42 7.42 0 0 1-7.437 7.438H11.942a7.42 7.42 0 0 1-7.437-7.438v-8.534c0-4.12-.222-5.38 2.933-8.03Zm8.682 17.661h14.817");
}
</style><path class="gre2p-bxe"/>`,
		"fallback": "arcticons:huawei-appmarket",
	});
}

export default Component;
