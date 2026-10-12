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
		"content": `<style>.o-6fcb5pr {
  cx: 16.5px;
  cy: 5px;
  r: 2.25px;
}

.q2ijv29-k {
  d: path("M2.75 10.25h3.5m11.5 0h3.5");
}

.rzeu6nb4c {
  d: path("m3.09 20.53l4.57-9.56l.34-.72h8l.34.72l4.57 9.56l.34.72H2.75zm4.66.72L9.55 14M12 21.25V14m4.25 7.25L14.45 14");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rzeu6nb4c"/><circle class="o-6fcb5pr"/><path class="q2ijv29-k"/></g>`,
		"fallback": "iconoven:crop-rows-sharp",
	});
}

export default Component;
