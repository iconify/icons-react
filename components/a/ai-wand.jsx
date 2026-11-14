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
		"content": `<style>.l1_y9xksp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 20l9.5-9.5m4.625-5.875l.139.324a1.5 1.5 0 0 0 .787.787l.324.139a.408.408 0 0 1 0 .75l-.324.139a1.5 1.5 0 0 0-.787.787l-.139.324a.408.408 0 0 1-.75 0l-.139-.324a1.5 1.5 0 0 0-.787-.787l-.324-.139a.408.408 0 0 1 0-.75l.324-.139a1.5 1.5 0 0 0 .787-.787l.139-.324a.408.408 0 0 1 .75 0");
}
</style><path class="l1_y9xksp"/>`,
		"fallback": "uix:ai-wand",
	});
}

export default Component;
