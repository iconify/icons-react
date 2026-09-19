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
		"content": `<style>.e1wigpbbe {
  cx: 17.258px;
  cy: 15.462px;
  r: 2.247px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ec_o2ivie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.53 31.569V7.298c0-.993-.806-1.798-1.799-1.798H8.27c-.993 0-1.798.805-1.798 1.798v24.271c0 .993.805 1.798 1.798 1.798h3.933l3.932 9.133l3.933-9.133h19.664c.993 0 1.798-.805 1.798-1.798");
}

.u9po75bjf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.99 22.464c0 1.868-1.714 3.594-4.495 4.528s-6.208.934-8.99 0s-4.494-2.66-4.494-4.528z");
}

.z2uk0rmzx {
  cx: 30.742px;
  cy: 15.462px;
  r: 2.247px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="ec_o2ivie"/><circle class="e1wigpbbe"/><circle class="z2uk0rmzx"/><path class="u9po75bjf"/>`,
		"fallback": "arcticons:gptassist",
	});
}

export default Component;
