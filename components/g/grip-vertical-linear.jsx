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

.ljb84cuaz {
  cx: 15.512px;
  cy: 12px;
  r: 0.75px;
}

.lqrlnfbtg {
  cx: 8.488px;
  cy: 5px;
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

.r41_wgb9w {
  cx: 8.504px;
  cy: 12px;
  r: 0.75px;
}

.rhe-p1bon {
  cx: 15.512px;
  cy: 19px;
  r: 0.75px;
}
</style><g class="ipq1z-bjh"><circle class="rhe-p1bon"/><circle class="ljb84cuaz"/><circle class="out3f_12j"/><circle class="ov9m4obnk"/><circle class="r41_wgb9w"/><circle class="lqrlnfbtg"/></g>`,
		"fallback": "solar:grip-vertical-linear",
	});
}

export default Component;
