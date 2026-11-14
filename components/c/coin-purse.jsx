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
		"content": `<style>.cjp1uub4t {
  d: path("M12.024 21H7.5q-.197 0-.392-.019q-.196-.02-.388-.058q-.193-.038-.381-.095t-.37-.132t-.355-.168t-.336-.202t-.316-.234q-.151-.125-.29-.264t-.264-.29q-.125-.152-.234-.316q-.109-.163-.202-.336q-.092-.174-.168-.355q-.075-.182-.132-.37t-.095-.381t-.058-.388T3.5 17c0-2.5 1-6 6.25-8L7.5 4h9l-2.25 5c2.245.855 3.713 1.985 4.658 3.194M8 9h8");
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ze82kx64m {
  d: path("M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><g class="ulnmmdpxh"><path class="cjp1uub4t"/><path class="ze82kx64m"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:coin-purse",
	});
}

export default Component;
