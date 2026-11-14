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
		"content": `<style>.wi53psbfx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.418 3.182Q3.75 4.25 3.75 6v12q0 1.75 2.668 2.818q2.331.932 5.582.932t5.582-.932Q20.25 19.75 20.25 18V6q0-1.75-2.668-2.818Q15.251 2.25 12 2.25t-5.582.932M5.25 18V8.241q.501.31 1.168.577Q8.749 9.75 12 9.75t5.582-.932q.667-.267 1.168-.577V18q0 .735-1.725 1.425q-2.063.825-5.025.825t-5.025-.825Q5.25 18.735 5.25 18");
}
</style><path class="wi53psbfx"/>`,
		"fallback": "uix-solid:cylinder",
	});
}

export default Component;
