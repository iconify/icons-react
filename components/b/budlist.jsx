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
		"content": `<style>.ca8nzsb5e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.926 7.082h25.39V43.5H8.926z");
}

.r6ec68bdv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.31 7.07l2.175.001l2.589 34.345l-4.744 2.079M13.29 10.1l.004-4.314l.79-1.245l15.52-.041l.75 1.368l.056 4.25m-17.597 5.433h17.096v16.428H12.813z");
}

.ve_qph1yt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.993 24.449l2.62 2.62l6.023-6.022");
}
</style><path class="ca8nzsb5e"/><path class="r6ec68bdv"/><path class="ve_qph1yt"/>`,
		"fallback": "arcticons:budlist",
	});
}

export default Component;
