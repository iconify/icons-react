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
		"content": `<style>.kmftiwb_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.578 19.376h8.146c.43 0 .776.346.776.777v19.785c0 .43-.346.777-.776.777h-8.146a.775.775 0 0 1-.776-.774V20.153c0-.43.346-.777.776-.777m8.146-12.091c.43 0 .776.347.776.777v8.359c0 .43-.346.777-.776.777h-8.146a.775.775 0 0 1-.776-.774v-3.769zM28.06 15.31c.43 0 .776.347.776.778v23.85c0 .43-.346.777-.776.777h-8.146a.775.775 0 0 1-.776-.774V20.68zm-13.638 8.15c.43 0 .776.347.776.778v15.7c0 .43-.346.777-.776.777H6.276a.775.775 0 0 1-.776-.777V28.83zm.777 11.419h3.94");
}
</style><path class="kmftiwb_l"/>`,
		"fallback": "arcticons:hiddify",
	});
}

export default Component;
