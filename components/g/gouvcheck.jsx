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
		"content": `<style>.fedimeb6c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m38.446 4.5l-13.94 32.717l-6.276-22.158");
}

.una6_bc7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.944 14.735A14.8 14.8 0 0 0 24 13.889c-8.177 0-14.806 6.629-14.806 14.806S15.824 43.5 24 43.5s14.806-6.629 14.806-14.806c0-2.612-.677-5.066-1.864-7.196");
}
</style><path class="una6_bc7o"/><path class="fedimeb6c"/>`,
		"fallback": "arcticons:gouvcheck",
	});
}

export default Component;
