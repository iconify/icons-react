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
		"content": `<style>.grybcac8z {
  d: path("M15.8284 4C15.4046 2.8015 14.2714 2 13 2H5C3.34315 2 2 3.34315 2 5V13C2 14.2714 2.8015 15.4046 4 15.8284M11 8H19C20.65684 8 22 9.34316 22 11V19C22 20.65684 20.65684 22 19 22H11C9.34316 22 8 20.65684 8 19V11C8 9.34316 9.34316 8 11 8Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yqndomb-o {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11 7H19C21.20912 7 23 8.79088 23 11V19C23 21.20912 21.20912 23 19 23H11C8.79088 23 7 21.20912 7 19V11C7 8.79088 8.79088 7 11 7Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="yqndomb-o"/><path class="grybcac8z"/></g>`,
		"fallback": "keyline-icons:copy-two-tone",
	});
}

export default Component;
