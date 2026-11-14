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
		"content": `<style>.b2vh0lbrc {
  d: path("M3 4.5h18v17H3Zm0 5h18m-13-7v4m8-4v4");
}

.dgvbys_fx {
  d: path("M12.5 13h5v5h-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b2vh0lbrc"/><path class="dgvbys_fx"/></g>`,
		"fallback": "uix-sharp:event-date",
	});
}

export default Component;
