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
		"content": `<style>.br-g88blb {
  d: path("M10.5 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.f7d-m7lwi {
  d: path("M12 15.75c-2 0-2.25-2 0-4.5c2.25 2.5 2 4.5 0 4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.undz1wbwi {
  d: path("M9 6.5h6l2.5 2h-11Zm-1.5 2h9v10h-9Zm1 10h7l1 2h-9Z");
}
</style><g class="ulnmmdpxh"><path class="br-g88blb"/><path class="undz1wbwi"/><path class="f7d-m7lwi"/></g>`,
		"fallback": "uix-sharp:garden-lantern",
	});
}

export default Component;
