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
		"content": `<style>.xnpkssber {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.875 4.875l.306.655A1.424 1.424 0 0 0 15 6.25a.787.787 0 0 1 1.072.834l-.085.642A1.26 1.26 0 0 0 17.5 9.125l.048-.01a.943.943 0 0 1 1.077 1.26l-.308.8a1.36 1.36 0 0 0 .308 1.45a.767.767 0 0 1-.082 1.155l-2.565 1.924a1.32 1.32 0 0 0-.478 1.421a.555.555 0 0 1-.642.697l-2.564-.513a1.5 1.5 0 0 0-.588 0l-2.564.513a.555.555 0 0 1-.642-.697a1.32 1.32 0 0 0-.478-1.421L5.457 13.78a.767.767 0 0 1-.082-1.155a1.36 1.36 0 0 0 .308-1.45l-.308-.8a.943.943 0 0 1 1.077-1.26l.048.01a1.26 1.26 0 0 0 1.513-1.399l-.085-.642A.787.787 0 0 1 9 6.25a1.424 1.424 0 0 0 1.819-.72l.306-.655a.966.966 0 0 1 1.75 0M12 10v11.5");
}
</style><path class="xnpkssber"/>`,
		"fallback": "uix:autumn-leaf",
	});
}

export default Component;
