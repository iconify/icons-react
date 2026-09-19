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
		"content": `<style>.b7bfiobry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.635 32.5l3.275-2.155m1.823-.995l3.606-1.658m1.824-.622l3.855-1.326m14.271-2.484l-2.943 10.274l-.934-9.962l-3.17-9.106l3.572 4.133l2.971 3.19m-9.967 3.176L21.73 20.89l3.805 3.711l-1.899 5.118z");
}

.bgt10_b9k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m40.841 22.243l1.524-1.143l-2.052-.763l-17.967 4.778z");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><path class="b7bfiobry"/><path class="bgt10_b9k"/>`,
		"fallback": "arcticons:flightaware",
	});
}

export default Component;
