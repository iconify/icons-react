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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ydnumkbzx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.663 22.842v3.493m4.484-5.195v6.897m4.378-9.23v10.304m4.485-12.624v15.026m4.538-11.823v8.347m4.804-6.318v3.975");
}
</style><path class="ydnumkbzx"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:folax",
	});
}

export default Component;
