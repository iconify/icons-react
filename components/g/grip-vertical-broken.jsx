import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lqrlnfbtg {
  cx: 8.488px;
  cy: 5px;
  r: 0.75px;
}

.mvk5gbb7t {
  cx: 8.488px;
  cy: 12px;
  r: 0.75px;
}

.out3f_12j {
  cx: 15.496px;
  cy: 5px;
  r: 0.75px;
}

.ov9m4obnk {
  cx: 8.504px;
  cy: 19px;
  r: 0.75px;
}

.rhe-p1bon {
  cx: 15.512px;
  cy: 19px;
  r: 0.75px;
}

.y-b52abdh {
  cx: 15.496px;
  cy: 12px;
  r: 0.75px;
}
</style><g class="ipq1z-bjh"><circle class="lqrlnfbtg"/><circle class="mvk5gbb7t"/><circle class="ov9m4obnk"/><circle class="out3f_12j"/><circle class="y-b52abdh"/><circle class="rhe-p1bon"/></g>`,
		"fallback": "solar:grip-vertical-broken",
	});
}

export default Component;
