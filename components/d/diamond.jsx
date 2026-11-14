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
		"content": `<style>.qvy53sl2l {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m14.386 3.826l5.788 5.788q2.386 2.386 0 4.772l-5.788 5.788q-2.386 2.386-4.772 0l-5.788-5.788Q1.44 12 3.826 9.614l5.788-5.788q2.386-2.386 4.772 0");
}
</style><path class="qvy53sl2l"/>`,
		"fallback": "uix-solid:diamond",
	});
}

export default Component;
