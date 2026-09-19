import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.blzsmxcec {
  d: path("M48.48 52.25c-.156 2.317-1.171 4.253-2.557 5.101H18.249c-1.39-.852-2.405-2.791-2.559-5.112l16.337-22.434z");
}

.f1rcikbee {
  fill: var(--svg-color--1b75bb, #1b75bb);
  d: path("M64 57.1a6.9 6.9 0 0 1-6.9 6.904H6.9A6.9 6.9 0 0 1 .004 57.1V6.9C.004 3.09 3.092 0 6.9 0h50.2A6.9 6.9 0 0 1 64 6.9z");
}

.n1mjunbsu {
  fill: var(--svg-color--fff, #fff);
}

.zfqujgbbe {
  d: path("M48.48 29.27c-.156 2.318-1.171 4.253-2.557 5.101H18.249c-1.39-.852-2.405-2.791-2.559-5.112L32.028 6.824z");
}
</style><path class="f1rcikbee"/><g class="n1mjunbsu"><path class="blzsmxcec"/><path class="zfqujgbbe"/></g>`,
		"fallback": "emojione-v1:fast-up-button",
	});
}

export default Component;
