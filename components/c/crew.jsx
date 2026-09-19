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
		"content": `<style>.qvowqskuc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.985 36.7a6.93 6.93 0 0 0 6.93-6.93V13.43a6.93 6.93 0 0 0-6.93-6.93h-19.97a6.93 6.93 0 0 0-6.93 6.93v16.34a6.93 6.93 0 0 0 6.93 6.93h1.51l.027 6.17a.632.632 0 0 0 1.049.473l7.582-6.643z");
}

.vnk26xu0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.804 22.971l3.03-3.029l3.678 3.68l10.903-10.903l3.03 3.028L20.511 29.68z");
}
</style><path class="qvowqskuc"/><path class="vnk26xu0x"/>`,
		"fallback": "arcticons:crew",
	});
}

export default Component;
