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
		"content": `<style>.c47fkddru {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.174 5.502H42.5V42.5H32.37L17.65 27.665");
}

.o7ttk0jji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.826 42.498H5.5V5.5h10.13l14.72 14.835");
}
</style><path class="o7ttk0jji"/><path class="c47fkddru"/>`,
		"fallback": "arcticons:denik-n",
	});
}

export default Component;
