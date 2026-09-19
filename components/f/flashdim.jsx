import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u5nta0bcy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.698 7.95v2.614m3.276-4.286v4.286M27.512 4.5v6.064m-10.798 3.242h14.573v3.771H16.714z");
}

.zssjc2i_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.951 43.5l-6.253-.052c-.655-.006-1.108-.634-1.101-1.098l.21-13.906c.012-.804-.236-1.571-.577-2.248l-2.5-4.967v-3.653h14.557v3.862l-2.726 4.549c-.386.643-.488 1.537-.488 2.509v13.592c0 .615-.291 1.419-1.121 1.412Zm-2.943-14.823v3.844");
}
</style><path class="u5nta0bcy"/><path class="zssjc2i_k"/>`,
		"fallback": "arcticons:flashdim",
	});
}

export default Component;
