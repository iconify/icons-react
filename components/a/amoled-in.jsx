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

.lx-hclb5b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.207 17.689l-2.84 6.369h5.685m0 0zL35.159 35.5M24 10.5l-11.159 25m6.422 0l2.682-6.018h4.114L28.74 35.5");
}
</style><path class="lx-hclb5b"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:amoled-in",
	});
}

export default Component;
