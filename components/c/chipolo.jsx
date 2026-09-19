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
		"content": `<style>.w653a1e1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 32.075a3.865 3.865 0 0 1-3.865 3.864h0a3.865 3.865 0 0 1-3.865-3.864h0a3.865 3.865 0 0 1 3.865-3.866h0a3.865 3.865 0 0 1 3.865 3.865m-15.96-3.675a11.94 11.94 0 0 1-11.1 7.54C9.846 35.94 4.5 30.594 4.5 24s5.346-11.94 11.94-11.94a11.94 11.94 0 0 1 11.099 7.541");
}
</style><path class="w653a1e1w"/>`,
		"fallback": "arcticons:chipolo",
	});
}

export default Component;
