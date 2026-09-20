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
		"content": `<style>.el753yuux {
  d: path("M4 10a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.fb4zxqney {
  d: path("M12 15a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mm5qhtb0x {
  fill: currentColor;
  d: path("M12 15a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xraocd5qw {
  fill: currentColor;
  d: path("M4 10a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="xraocd5qw"/><path class="mm5qhtb0x"/><path class="el753yuux"/><path class="fb4zxqney"/></g>`,
		"fallback": "iconmind:blob-duotone-thin",
	});
}

export default Component;
