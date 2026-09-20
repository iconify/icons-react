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
		"content": `<style>.kg-iimb1w {
  fill: currentColor;
  d: path("M19.2 20q-2.702 0-5.418-1.244t-4.995-3.533t-3.533-5.021T4 4.8V4h4.439l.848 4.083l-2.696 2.51q.684 1.186 1.417 2.167t1.527 1.769q.802.84 1.808 1.57t2.296 1.44l2.611-2.708l3.75.756V20zM12.423 8.039v-.77h1.808v-.884h-1.808V4H15v.77h-1.808v.846H15v2.423zm3.385 0V4h.769v4.039zm1.577 0V4H20v2.385h-1.846v1.654zm.769-2.423h1.077v-.847h-1.077z");
}
</style><path class="kg-iimb1w"/>`,
		"fallback": "material-symbols-light:dialer-sip-sharp",
	});
}

export default Component;
