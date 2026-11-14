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
		"content": `<style>.di0w-kafw {
  d: path("M8.75 7h2v8.5h-2Zm3.75 2.75h1M18 15v6m-3-3h6");
}

.jbdl7b3we {
  d: path("M12.15 15.5h-3.4V7h6.5v5.2");
}

.l3n-_2b4n {
  d: path("M15.2 22H5.5V2h13v10.2M11 4h2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l3n-_2b4n"/><path class="jbdl7b3we"/><path class="di0w-kafw"/></g>`,
		"fallback": "uix-sharp:account-open-online",
	});
}

export default Component;
