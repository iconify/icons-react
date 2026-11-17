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
		"content": `<style>.bbkqvxbfh {
  fill-rule: evenodd;
  d: path("M22 8C22.552 8 23 8.447 23 9V21C23 22.104 22.105 23 21 23H3C1.895 23 1 22.104 1 21V9C1 8.447 1.448 8 2 8H22ZM8 11C6.896 11 6 11.895 6 13V21H18V13C18 11.895 17.104 11 16 11H8Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.xx40enb-j {
  d: path("M13 17C13.552 17 14 17.448 14 18C14 18.552 13.552 19 13 19H11C10.448 19 10 18.552 10 18C10 17.448 10.448 17 11 17H13Z");
}

.zb13adc4x {
  d: path("M11.088 1.219C11.66 0.926 12.34 0.926 12.912 1.219L21.13 5.43C21.409 5.576 21.306 6 20.99 6H3.01C2.694 6 2.591 5.576 2.869 5.43L11.088 1.219Z");
}
</style><g class="cuyn6tgcc"><path class="xx40enb-j"/><path clip-rule="evenodd" class="bbkqvxbfh"/><path class="zb13adc4x"/></g>`,
		"fallback": "keyline-icons:garage-fill",
	});
}

export default Component;
