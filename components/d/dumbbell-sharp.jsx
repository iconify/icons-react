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
		"content": `<style>.duz30yb_i {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2.9999 12.1202L5.8057 9.3144L14.6856 18.1943L11.8798 21.0001ZM5.0357 14.156L2.9999 16.1917L7.8083 21.0001L9.844 18.9643M21.0001 11.8798L18.1943 14.6856L9.3144 5.8057L12.1202 2.9999ZM18.9643 9.844L21.0001 7.8083L16.1917 2.9999L14.156 5.0357M5.4041 18.5959L3.2955 20.7045M18.5959 5.4041L20.7045 3.2955M10.5969 13.4031L13.4031 10.5969");
}
</style><path class="duz30yb_i"/>`,
		"fallback": "keyline-icons:dumbbell-sharp",
	});
}

export default Component;
