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
		"content": `<style>.d5ki29bqb {
  d: path("M13.75 2.75h-6.5a2.5 2.5 0 0 0-2.5 2.5v6.25L8 13l3.25-2.25L14.5 13l4.75-2V8.25Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l4wrdvbmq {
  d: path("M13.75 2.75v3.5a2 2 0 0 0 2 2h3.5m-14.5 6.5L8 16.25L11.25 14l3.25 2.25l4.75-2v4a2.5 2.5 0 0 1-2.5 2.5h-9.5a2.5 2.5 0 0 1-2.5-2.5Z");
}
</style><g class="hntgybcog"><path class="d5ki29bqb"/><path class="l4wrdvbmq"/></g>`,
		"fallback": "iconoven:file-broken",
	});
}

export default Component;
