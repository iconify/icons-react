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
		"content": `<style>.bq6ix9bbt {
  cx: 17.25px;
  cy: 7.5px;
  r: 4px;
}

.oe0th3t_g {
  d: path("M6.25 13.15V5a2.25 2.25 0 0 1 4.5 0v8.15a4.25 4.25 0 1 1-4.5 0ZM8.5 17V9.75");
}

.x0o0qhbwe {
  d: path("m18.38 6.52l-.35-.75h-1.94v.86c0 1.22 2.34.61 2.34 1.78v.83h-2.018l-.292-.73");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="oe0th3t_g"/><circle class="bq6ix9bbt"/><path class="x0o0qhbwe"/></g>`,
		"fallback": "iconoven:fundraising-sharp",
	});
}

export default Component;
