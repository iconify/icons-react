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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ol9htex1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.063 11.5L15.458 26.788l7.439-.224l-.96 9.936l10.605-15.288l-7.439.224Z");
}
</style><path class="ol9htex1i"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:electron",
	});
}

export default Component;
