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
		"content": `<style>.cvoep2bmy {
  fill: currentColor;
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j835zw5-z {
  d: path("M3 9h18");
}

.r6v496tzo {
  fill: currentColor;
  d: path("M6 14.5A2.5 2.5 0 0 1 8.5 12h7a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-7A2.5 2.5 0 0 1 6 14.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xd7gio8si {
  d: path("M6 14.5A2.5 2.5 0 0 1 8.5 12h7a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-7A2.5 2.5 0 0 1 6 14.5");
}

.zrwkhybyf {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="cvoep2bmy"/><path class="r6v496tzo"/><path class="zrwkhybyf"/><path class="j835zw5-z"/><path class="xd7gio8si"/></g>`,
		"fallback": "iconmind:date-span-duotone-thin",
	});
}

export default Component;
