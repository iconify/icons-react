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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ngjwxj32z {
  d: path("M9.5 4L9 9.5l3 11");
}

.oq2qjowwo {
  d: path("M7 4h10l4 5.5l-9 11l-9-11ZM3 9.5h18");
}

.yeqoigbkh {
  fill: currentColor;
  d: path("M15 9.5h6l-9 11Z");
}
</style><g class="hntgybcog"><path class="oq2qjowwo"/><path class="ngjwxj32z"/><path class="yeqoigbkh"/></g>`,
		"fallback": "uix:flat-shading",
	});
}

export default Component;
