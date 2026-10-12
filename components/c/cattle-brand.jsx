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
		"content": `<style>.hl6af3b-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.65 17.58l-.86-1.24q-.43-.61-1.04-.18l-2.47 1.72q-.61.43-.18 1.04l.86 1.24q.43.61 1.04.18l2.47-1.72q.61-.43.18-1.04m-.43-.62l5.73-4.02m-.71-1.03l1.43 2.06q.72 1.02 1.74.3l2.06-1.43q1.02-.72.3-1.74l-1.43-2.06q-.72-1.02-1.74-.3l-2.06 1.43q-1.02.72-.3 1.74m4.51-6.66c-.5-.4.5-.85 0-1.25s.5-.85 0-1.25m3 5.5c-.5-.4.5-.85 0-1.25s.5-.85 0-1.25");
}
</style><path class="hl6af3b-c"/>`,
		"fallback": "iconoven:cattle-brand",
	});
}

export default Component;
