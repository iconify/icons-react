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
		"content": `<style>.a5q7k9bof {
  d: path("M19 18.5C19 19.8807 17.8807 21 16.5 21C15.1193 21 14 19.8807 14 18.5C14 17.1193 15.1193 16 16.5 16C17.8807 16 19 17.1193 19 18.5ZM18.5 20.5L20 22");
}

.eooifre0n {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14 1C14.2652 1 14.5195 1.1054 14.707 1.293L20.707 7.293C20.8946 7.4805 21 7.7348 21 8L21 12C21 12.5523 20.5523 13 20 13L14 13C12.3431 13 11 14.3431 11 16L11 22C11 22.5523 10.5523 23 10 23L8 23C5.2386 23 3 20.7614 3 18L3 6C3 3.2386 5.2386 1 8 1L14 1ZM14 5C14 6.6568 15.3431 8 17 8L18.5858 8L14 3.4142L14 5Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="eooifre0n"/><path class="a5q7k9bof"/></g>`,
		"fallback": "keyline-icons:file-search-fill",
	});
}

export default Component;
