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
		"content": `<style>.obwba0bzl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.21 30.642c-2.321-9.32 4.67-17.747 10.644-13.426c5.374 3.888-1.85 13.426-10.643 13.426m-6.421 0c2.321-9.32-4.67-17.747-10.644-13.426c-5.374 3.888 1.85 13.426 10.643 13.426");
}

.p4ckaobxs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.023 10.078c3.708 3.404 4.653 8.746 1.628 20.564m-1.628-20.564V4.5m-1.686 1.796h3.372M14.758 37.071h18.53m-18.53 3.214h18.53m-18.53-6.429h18.53");
}

.wez-9ibhs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.023 30.642h24V43.5h-24zm12-20.564c-3.707 3.404-4.653 8.746-1.627 20.564");
}
</style><path class="wez-9ibhs"/><path class="obwba0bzl"/><path class="p4ckaobxs"/>`,
		"fallback": "arcticons:chogue",
	});
}

export default Component;
