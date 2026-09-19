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
		"content": `<style>.qsrao93uu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.85 5.5h10.06v10.06a4.796 4.796 0 0 1-4.796 4.797H10.85a4.796 4.796 0 0 1-4.796-4.796h0v-5.265A4.796 4.796 0 0 1 10.85 5.5m21.036 0h10.06v10.06a4.796 4.796 0 0 1-4.795 4.797h-5.265a4.796 4.796 0 0 1-4.796-4.796v-5.265A4.796 4.796 0 0 1 31.886 5.5m10.061 20.823c.006 5.777-3.412 11.119-8.968 14.009c-5.555 2.89-12.4 2.892-17.956.002s-8.975-8.231-8.97-14.008z");
}
</style><path class="qsrao93uu"/>`,
		"fallback": "arcticons:europlasma-alt",
	});
}

export default Component;
