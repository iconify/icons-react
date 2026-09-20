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

.n_0tf5blz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.822 18.502V29.5h5.499m-13.469-5.499h3.575M12.852 29.5V18.502h5.499m13.085 10.996zc-2.062 0-3.574-1.65-3.574-3.575v-3.711c0-2.062 1.65-3.712 3.574-3.712a3.696 3.696 0 0 1 3.712 3.712v3.574a3.696 3.696 0 0 1-3.712 3.711");
}
</style><circle class="cpk0fnbgt"/><path class="n_0tf5blz"/>`,
		"fallback": "arcticons:flo-tr",
	});
}

export default Component;
