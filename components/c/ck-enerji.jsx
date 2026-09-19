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

.tx1tjvcee {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.522 24.841a3.745 3.745 0 0 1-3.761 3.761h0C9.67 28.602 8 26.931 8 24.981V21.22c0-2.09 1.672-3.761 3.76-3.622h0c2.09 0 3.623 1.672 3.623 3.622h0m18.767 3.482L40 17.459m-5.85 0v11.143m5.85 0l-4.457-5.572M25.2 14.676h4.16l-4.317 8.274h3.653l-7.573 10.374l2.736-8.032H20.31z");
}
</style><circle class="cpk0fnbgt"/><path class="tx1tjvcee"/>`,
		"fallback": "arcticons:ck-enerji",
	});
}

export default Component;
