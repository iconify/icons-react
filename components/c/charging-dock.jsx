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
		"content": `<style>.oawdqdxvc {
  d: path("M7 2.5h10v16.25H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v1nsp4bov {
  d: path("m12.75 6.25l-3 4.5H12l-.75 4l3-4.75H12Z");
}

.y4btll8su {
  d: path("M2.5 15.5v4a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-4");
}
</style><g class="ulnmmdpxh"><path class="y4btll8su"/><path class="oawdqdxvc"/><path class="v1nsp4bov"/></g>`,
		"fallback": "uix-sharp:charging-dock",
	});
}

export default Component;
