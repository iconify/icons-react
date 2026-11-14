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
		"content": `<style>.eyc0pybfk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.625 2.25h-9.25q-2.123 0-3.624 1.501T2.25 7.375v9.25q0 2.123 1.501 3.624t3.624 1.501h9.25q2.123 0 3.624-1.501t1.501-3.624v-9.25q0-2.123-1.501-3.624T16.625 2.25M12.53 6.47q3.72 3.719 3.72 6.53q0 1.76-1.245 3.005T12 17.25t-3.005-1.245T7.75 13q0-2.811 3.72-6.53q.105-.106.243-.163T12 6.25t.287.057t.243.163");
}
</style><path class="eyc0pybfk"/>`,
		"fallback": "uix-solid:colour-spot",
	});
}

export default Component;
