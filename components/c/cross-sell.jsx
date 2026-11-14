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
		"content": `<style>.r0ljx471b {
  d: path("M2.5 12h9v9.5h-9Z");
}

.rtx7e4nzh {
  d: path("M7.5 12V3.5q0-.098.019-.195t.057-.188t.093-.173t.124-.151t.151-.124t.173-.093t.188-.057T8.5 2.5h12q.098 0 .195.019t.188.057t.173.093q.081.054.151.124t.124.151q.055.082.093.173t.057.188t.019.195V13q0 .082-.014.164q-.013.081-.04.159q-.026.078-.065.151t-.09.138t-.111.121t-.129.102t-.144.079q-.076.033-.156.054M15.243 14H11.5m-4-7.5h14m-7-4v4m-12 9h9M6 12v3.5m12-.5v6m-3-3h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r0ljx471b"/><path class="rtx7e4nzh"/></g>`,
		"fallback": "uix-sharp:cross-sell",
	});
}

export default Component;
