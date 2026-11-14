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
		"content": `<style>.aghm759nx {
  d: path("M3 5q4.5-4 9 0t9 0");
}

.enwzisbwr {
  d: path("M3 19q1.5-4 3 0t3 0t3 0t3 0t3 0t3 0");
}

.iz30smblu {
  d: path("M3 12q2.25-4 4.5 0t4.5 0t4.5 0t4.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aghm759nx"/><path class="iz30smblu"/><path class="enwzisbwr"/></g>`,
		"fallback": "uix-sharp:electromagnetic-spectrum",
	});
}

export default Component;
