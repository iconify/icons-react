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
		"content": `<style>.b_sdgybvb {
  d: path("M3.75 2.75h12.5v17H3.75zM7.25 7h5.5m-5.5 3.5h3.5");
}

.de-nvpb2c {
  d: path("m18.4 18.4l2.85 2.85");
}

.t6u2r9bql {
  cx: 16px;
  cy: 16px;
  r: 3.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="b_sdgybvb"/><circle class="t6u2r9bql"/><path class="de-nvpb2c"/></g>`,
		"fallback": "iconoven:file-search-ai-sharp",
	});
}

export default Component;
