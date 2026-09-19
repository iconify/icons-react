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
		"content": `<style>.osihubb-o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.718 35.247c0 1.318 1.35 1.979 2.945 1.056l19.864-11.488c.747-.431.727-1.21 0-1.63L17.663 11.697c-1.594-.923-2.945-.262-2.945 1.056z");
}

.xm9uzjeuh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24");
}
</style><path class="xm9uzjeuh"/><path class="osihubb-o"/>`,
		"fallback": "arcticons:cinema",
	});
}

export default Component;
