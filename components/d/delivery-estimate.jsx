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
		"content": `<style>.pz_8vmb6j {
  d: path("M12.7 19.5H2.5V3h17v8.9M2.5 8h17M11 3v5m4.5 6.75h5m-5 6.5h5");
}

.sbezkcbzn {
  d: path("M19.5 14.75v1l-3 4.5v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x4h68jbhs {
  d: path("M16.5 14.75v1l3 4.5v1");
}
</style><g class="ulnmmdpxh"><path class="pz_8vmb6j"/><path class="x4h68jbhs"/><path class="sbezkcbzn"/></g>`,
		"fallback": "uix-sharp:delivery-estimate",
	});
}

export default Component;
