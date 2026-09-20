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
		"content": `<style>.vv23e5vqz {
  fill: currentColor;
  d: path("M8.463 20.538Q7 19.075 7 17t1.463-3.537T12 12t3.538 1.463T17 17t-1.463 3.538T12 22t-3.537-1.463M7 12.15l-5-5q2-2 4.588-3.075T12 3t5.413 1.075T22 7.15l-5 5q-1.025-1.025-2.3-1.588T12 10t-2.7.563T7 12.15");
}
</style><path class="vv23e5vqz"/>`,
		"fallback": "material-symbols:compass-calibration-sharp",
	});
}

export default Component;
