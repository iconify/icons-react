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
		"content": `<style>.gkftbqpgw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.725 5v9.93h5.658c2.12 0 4.585 1.194 4.585 4.495c0 2.731-2.18 4.495-4.585 4.495h-8.517c-2.064 0-4.575 1.735-4.575 4.575c0 2.833 2.348 4.576 4.575 4.576h5.618V43");
}

.xpswh93iz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.725 5c-3.07 1.433-10.859 4.915-14.042 4.915v16.577c0 7.828 9.837 14.639 13.833 16.508m2.969 0c3.995-1.87 13.832-8.681 13.832-16.508V9.914c-3.19 0-10.97-3.479-14.04-4.913");
}
</style><path class="xpswh93iz"/><path class="gkftbqpgw"/>`,
		"fallback": "arcticons:airgap-wallet",
	});
}

export default Component;
