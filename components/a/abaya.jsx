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
		"content": `<style>.ttkcakyim {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3q2 1.5 4 0l4 1l3.5 7.5l-2.5 1.25L20 21H4l1-8.25l-2.5-1.25L6 4Zm2 .75V21");
}
</style><path class="ttkcakyim"/>`,
		"fallback": "uix-sharp:abaya",
	});
}

export default Component;
