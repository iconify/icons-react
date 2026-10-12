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
		"content": `<style>.lz40wsw9f {
  d: path("M7 11.75a5 5 0 0 1 10 0Zm.25 0h10.5v6.75H6.25v-6.75zm1.75 2v2.75m3-2.75v2.75m3-2.75v2.75m-10.25 2h14.5v2.75H4.75z");
}

.oxq-w70uw {
  d: path("M12 2.75v1.5m-1.25 0h2.5v2.5h-2.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="oxq-w70uw"/><path class="lz40wsw9f"/></g>`,
		"fallback": "iconoven:capitol-dome-sharp",
	});
}

export default Component;
