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
		"content": `<style>.jqedijf0e {
  d: path("M12.25 21.5a9.5 9.5 0 1 1 9.25-9.25h-7.25a2 2 0 0 0-2 2Zm-3.5-12h.01m5.74 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xsucigbsh {
  d: path("M7.5 14c.75 1.25 1.75 2 2.75 2.25M18 15v6m-3-3h6");
}
</style><g class="ulnmmdpxh"><path class="jqedijf0e"/><path class="xsucigbsh"/></g>`,
		"fallback": "uix-sharp:emoji-add",
	});
}

export default Component;
