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
		"content": `<style>.pyyhg9neq {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3.9909 11.0068C2.7372 11.9515 2 13.4302 2 15C2 17.7614 4.2386 20 7 20C9.7614 20 12 17.7614 12 15M3.9909 11.0068L12 15M3.9909 11.0068L3.9909 4L3.9909 3M12 15C12 17.7614 14.2386 20 17 20C19.7614 20 22 17.7614 22 15C22 13.4302 21.2628 11.9515 20.0091 11.0068M12 15L20.0091 11.0068M20.0091 11.0068L20.0091 4L20.0091 3");
}
</style><path class="pyyhg9neq"/>`,
		"fallback": "keyline-icons:bra-sharp",
	});
}

export default Component;
