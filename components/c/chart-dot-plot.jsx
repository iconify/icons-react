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
		"content": `<style>.k8oom5ayn {
  fill: currentColor;
  d: path("M12.75 5.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM7.25 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm9 6.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.siw0-tlnx {
  d: path("M2.5 5.5H5M2.5 12H5m-2.5 6.5H5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.usv6yclsl {
  d: path("M8 5.5h.01m2.74 0h.01m8.74 0h.01M13.25 12h.01M16 12h.01m2.74 0h.01m2.74 0h.01M8 18.5h.01m2.74 0h.01m2.74 0h.01");
}
</style><g class="ulnmmdpxh"><path class="siw0-tlnx"/><path class="k8oom5ayn"/><path class="usv6yclsl"/></g>`,
		"fallback": "uix-sharp:chart-dot-plot",
	});
}

export default Component;
