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
		"content": `<style>.krfag1sus {
  d: path("M15.5 19.5v-4h4");
}

.lvrm-qbzq {
  d: path("M12.7 20.5H3.5V5h17v7.7M8 3v4m8-4v4M3.5 10h17M8 3v4m8-4v4M3.5 10h17m0 10.5l-5-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lvrm-qbzq"/><path class="krfag1sus"/></g>`,
		"fallback": "uix-sharp:calendar-import",
	});
}

export default Component;
