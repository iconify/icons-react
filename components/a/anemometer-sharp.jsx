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
		"content": `<style>.f1zl3cc-e {
  cx: 12px;
  cy: 8px;
  r: 1.75px;
}

.tkc3tv96c {
  d: path("M6.25 8h4m3.5 0h3.75M12 9.75v11.5m-3 0h6M6.25 4.75v6.5a3.25 3.25 0 0 1 0-6.5Zm14.5 0v6.5a3.25 3.25 0 0 1 0-6.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="tkc3tv96c"/><circle class="f1zl3cc-e"/></g>`,
		"fallback": "iconoven:anemometer-sharp",
	});
}

export default Component;
