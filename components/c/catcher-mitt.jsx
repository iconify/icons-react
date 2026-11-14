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
		"content": `<style>.hy63knbih {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m5.341 17.456l.931 3.726q.016.06.04.117q.025.058.059.11t.076.098t.091.084t.104.068t.114.05t.12.031q.062.01.124.01h9q.128 0 .248-.042q.121-.043.221-.122Q21.75 17.36 21.75 11.5q0-4.14-1.957-6.818Q17.65 1.75 14 1.75q-5.922 0-6.649 7.121q-.185-.126-.391-.229q-1.442-.722-2.876.234L4.05 8.9q-1.911 1.433-1.414 4.291q.461 2.651 2.705 4.265M10.75 11.5q0-3.75 3.75-3.75t3.75 3.75t-3.75 3.75t-3.75-3.75");
}
</style><path class="hy63knbih"/>`,
		"fallback": "uix-solid:catcher-mitt",
	});
}

export default Component;
