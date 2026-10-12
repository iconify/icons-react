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
		"content": `<style>.dti-we-6p {
  d: path("M2.75 20.45v-10.2l.58-.55l4.59-4.4l.58-.55l.58.55l4.59 4.4l.58.55v11H2.75z");
}

.fc9-vfzxi {
  d: path("M6 21.25v-5h5v5m-5-5l5 5m0-5l-5 5m1.5-10.5h2m7.75 10.5V6.75h4v14.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="dti-we-6p"/><path class="fc9-vfzxi"/></g>`,
		"fallback": "iconoven:barn-farm-sharp",
	});
}

export default Component;
