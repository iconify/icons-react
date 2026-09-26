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
		"content": `<style>.debnu0bfa {
  d: path("M4.3535 4.3535C4.1264 4.8556 4 5.4131 4 6V18C4 20.2091 5.7909 22 8 22H16C17.6222 22 19.0188 21.0343 19.6465 19.6465M2 2L22 22");
}

.lpykjbbqg {
  stroke-opacity: 0.4;
  d: path("M7.6703 2.01C7.779 2 7.889 2 8 2H14L20 8V14.3431M20 8H17C15.34 8 14 6.6569 14 5V2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vfy9zwu-h {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20.3919 20.3919C19.5438 21.9458 17.895 23 16 23H8C5.2386 23 3 20.76 3 18V6C3 5.1336 3.2204 4.3186 3.6081 3.6081L20.3919 20.3919Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="vfy9zwu-h"/><path class="lpykjbbqg"/><path class="debnu0bfa"/></g>`,
		"fallback": "keyline-icons:file-off-two-tone",
	});
}

export default Component;
