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
		"content": `<style>.chzhupbxz {
  d: path("M4.25 2.75h6.5v3.5h-6.5zm14.5 3v15.5m-2.5-15.5h5");
}

.ld7nlxb7r {
  cx: 10px;
  cy: 15.25px;
  r: 2.5px;
}

.w47qa_byy {
  cx: 10px;
  cy: 15.25px;
  r: 6px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="w47qa_byy"/><circle class="ld7nlxb7r"/><path class="chzhupbxz"/></g>`,
		"fallback": "iconoven:drum-kit-sharp",
	});
}

export default Component;
