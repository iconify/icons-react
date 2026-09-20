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
		"content": `<style>.azpxo9blq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.69 31.17h8.56v7.17H5.69a1.19 1.19 0 0 1-1.19-1.2v-4.78a1.19 1.19 0 0 1 1.19-1.19m8.56 0H24v7.17h-9.75zm9.75 0h9.75v7.17H24zm9.75 0h9.75v6a1.19 1.19 0 0 1-1.19 1.19h-8.56zM15.44 24H24v7.17h-9.75v-6A1.19 1.19 0 0 1 15.44 24M24 24h9.75v7.17H24zm9.75 0h9.75v7.17h-9.75zm-8.56-7.17h8.56V24H24v-6a1.19 1.19 0 0 1 1.19-1.17m8.56 0h9.75V24h-9.75z");
}

.t8__1o61x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.94 9.67h7.36a1.19 1.19 0 0 1 1.19 1.19v6h-9.74v-6a1.19 1.19 0 0 1 1.19-1.19");
}
</style><path class="azpxo9blq"/><path class="t8__1o61x"/>`,
		"fallback": "arcticons:cpustats",
	});
}

export default Component;
