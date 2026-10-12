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
		"content": `<style>.lte-lib4u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.65 17.58l-.86-1.24l-.43-.61l-.61.43l-2.47 1.72l-.61.43l.43.61l.86 1.24l.43.61l.61-.43l2.47-1.72l.61-.43zm-.43-.62l5.73-4.02m-.71-1.03l1.43 2.06l.72 1.02l1.02-.72l2.06-1.43l1.02-.72l-.72-1.02l-1.43-2.06l-.72-1.02l-1.02.72l-2.06 1.43l-1.02.72zm4.51-6.66c-.5-.4.5-.85 0-1.25s.5-.85 0-1.25m3 5.5c-.5-.4.5-.85 0-1.25s.5-.85 0-1.25");
}
</style><path class="lte-lib4u"/>`,
		"fallback": "iconoven:cattle-brand-sharp",
	});
}

export default Component;
