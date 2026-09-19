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
		"content": `<style>.bw8p34bgq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5a9.237 9.237 0 1 1-9.22 9.254v-.017A9.237 9.237 0 0 1 24 5.5m0 21.897c10.32 0 18.457 6.873 18.457 10.296V42.5H5.543v-4.893c0-3.423 8.136-10.21 18.457-10.21");
}
</style><path class="bw8p34bgq"/>`,
		"fallback": "arcticons:contacts-alt",
	});
}

export default Component;
