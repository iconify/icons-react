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
		"content": `<style>.ksz92hb2v {
  d: path("M4.35 11.5h15.9l-.32-.51l-.61-.98L19 9.5l.32-.51l.61-.98l.32-.51l-.27-.54l-.71-1.42L19 5H5l-.27.54l-.71 1.42l-.27.54l.32.51l.61.98l.32.51l-.32.51l-.61.98l-.32.51zm1.15-4h13m-15.75 4h18.5v9.75H2.75z");
}

.s2sj81x6v {
  d: path("M5.25 15h13.5v3.5H5.25Zm4.5 0v3.5m4.5-3.5v3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ksz92hb2v"/><path class="s2sj81x6v"/></g>`,
		"fallback": "iconoven:harmonium-sharp",
	});
}

export default Component;
