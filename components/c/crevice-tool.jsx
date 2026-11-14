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
		"content": `<style>.wt_hez-3s {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.275 5.311q-.893-.1-1.609.444L8.672 11.07q-.631.479-.815 1.199q-1.596-.54-3.193 1.057l-.53.53q-.989.988-.989 2.386t.989 2.387l1.237 1.237q.988.989 2.387.989q1.398 0 2.386-.989l.53-.53q1.557-1.556 1.083-3.113q.677-.159 1.159-.722l6.388-7.453q.629-.73.276-1.626q-.354-.897-1.311-1.001z");
}
</style><path class="wt_hez-3s"/>`,
		"fallback": "uix-solid:crevice-tool",
	});
}

export default Component;
