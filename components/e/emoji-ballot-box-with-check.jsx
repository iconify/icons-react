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
		"content": `<style>.amo_f6b4b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.727 18.776h22.268c.423 0 .768.344.768.767v22.192a.766.766 0 0 1-.766.765H9.73a.77.77 0 0 1-.768-.768V19.541c0-.423.343-.765.766-.765");
}

.k66l_cctl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.039 5.5C23.447 23.867 20.612 36.583 20.612 36.583s-2.835-7.064-5.67-9.89");
}
</style><path class="k66l_cctl"/><path class="amo_f6b4b"/>`,
		"fallback": "arcticons:emoji-ballot-box-with-check",
	});
}

export default Component;
