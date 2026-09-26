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
		"content": `<style>.i6ltabchy {
  stroke-opacity: 0.4;
  d: path("M3 3.5H12.9583M3 8.1006H5.9875M3 12.7011H5.9875");
}

.n1941ac-k {
  fill: currentColor;
  d: path("M9.31097 10.3752C8.96482 9.25452 10.0066 8.07664 11.2241 8.49437L11.2231 8.49535L20.9838 11.8411C22.2927 12.2898 22.3471 14.1241 21.0864 14.6633L17.1616 16.3401L15.2133 20.6194C14.6354 21.8879 12.8276 21.7484 12.4223 20.4377L9.31097 10.3752Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="i6ltabchy"/><path class="n1941ac-k"/></g>`,
		"fallback": "keyline-icons:cursor-text-duotone",
	});
}

export default Component;
