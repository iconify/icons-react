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
		"content": `<style>.ckk-appfw {
  cx: 13.6px;
  cy: 34.3px;
  r: 4.2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.eu9001bom {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.5 26.1h-33c-1.1 0-2 .9-2 2v12.4c0 1.1.9 2 2 2h33c1.1 0 2-.9 2-2V28.1c0-1.1-.9-2-2-2");
}

.he2p4cc0u {
  cx: 13.6px;
  cy: 13.7px;
  r: 4.2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.q7rvkopmp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.5 5.5h-33c-1.1 0-2 .9-2 2v12.4c0 1.1.9 2 2 2h33c1.1 0 2-.9 2-2V7.5c0-1.1-.9-2-2-2");
}
</style><path class="q7rvkopmp"/><circle class="he2p4cc0u"/><path class="eu9001bom"/><circle class="ckk-appfw"/>`,
		"fallback": "arcticons:ftpclient",
	});
}

export default Component;
