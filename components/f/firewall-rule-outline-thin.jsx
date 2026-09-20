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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.c7z9o8buo {
  d: path("M7 15h10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l517yxbln {
  d: path("M12 9v6");
}

.r182r524c {
  d: path("M7 9h10");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="r182r524c"/><path class="l517yxbln"/><path class="c7z9o8buo"/></g>`,
		"fallback": "iconmind:firewall-rule-outline-thin",
	});
}

export default Component;
