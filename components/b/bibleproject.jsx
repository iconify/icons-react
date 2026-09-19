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
		"content": `<style>.myjifbbpf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.661 5.5v31.411l8.414-2.89V42.5l10.178-10.177l18.086 4.524V5.5l-18.202 4.981z");
}
</style><path class="myjifbbpf"/>`,
		"fallback": "arcticons:bibleproject",
	});
}

export default Component;
