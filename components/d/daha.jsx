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

.kqgv95mln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.798 21.292v-9.935h6.571s3.778 0 3.778 4.967s-3.778 4.968-3.778 4.968zm24.404 0v-4.968s0-5.04-5.233-4.967c-5.465.076-5.233 4.967-5.233 4.967v4.968m0-1.848h10.466M25.736 34.796h10.466m0 1.848v-4.968s0-5.04-5.233-4.967c-5.465.076-5.233 4.967-5.233 4.967v4.968m-13.938-9.935v9.935m10.282-9.935v9.935m-10.282-4.968H22.08");
}
</style><path class="kqgv95mln"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:daha",
	});
}

export default Component;
