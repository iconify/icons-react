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
		"content": `<style>.g7jc2qb7h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.5 22.443h5.75v-6.828H12.5zm0 9.942h5.75v-6.828H12.5zm8.625 0h5.75v-6.828h-5.75zm8.625 0h5.75v-6.828h-5.75zm-8.625-9.942h5.75v-6.828h-5.75zm8.625-6.828v6.828h5.75v-6.828z");
}

.ry7oldtls {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.5 24C2.5 12.1 12.1 2.5 24 2.5S45.5 12.1 45.5 24S35.9 45.5 24 45.5S2.5 35.9 2.5 24");
}
</style><path class="ry7oldtls"/><path class="g7jc2qb7h"/>`,
		"fallback": "arcticons:benotes",
	});
}

export default Component;
