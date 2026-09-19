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
		"content": `<style>.b72o4ccfw {
  cx: 18.332px;
  cy: 15.02px;
  r: 5.389px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jtq14ibpo {
  cx: 24.056px;
  cy: 9.889px;
  r: 5.389px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lkkes6b-o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.056 11.267V43.5m0-9.298h-4.422m4.422 2.935h-4.422m4.422 2.89h-4.422");
}

.peh688b2w {
  cx: 29.668px;
  cy: 15.02px;
  r: 5.389px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="b72o4ccfw"/><circle class="peh688b2w"/><circle class="jtq14ibpo"/><path class="lkkes6b-o"/>`,
		"fallback": "arcticons:history-of-me",
	});
}

export default Component;
