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
		"content": `<style>.re5gdbvwm {
  cx: 24px;
  cy: 24px;
  r: 16px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sl_vcbc0v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.105 37.072V43.5L24 45.5h.003l-9.106-2v-6.34M24 2.5v3m10.764-.111l-1.502 2.597m9.374 5.293l-2.6 1.496m5.464 9.276l-3-.007m.086 10.764L39.992 33.3M5.313 34.633l2.608-1.484M2.5 23.848l3 .021m-.035-10.765l2.586 1.521m5.36-9.337l1.477 2.611");
}
</style><circle class="re5gdbvwm"/><path class="sl_vcbc0v"/>`,
		"fallback": "arcticons:digilux",
	});
}

export default Component;
