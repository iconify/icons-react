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
		"content": `<style>.mnedkcapm {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.427px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.qgi4-e_vt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.5 14.96l-.797.219l-8.172 2.25c-1.107-3.965-2.494-8.06-4.228-12.003m8.511 37.001l-.01-.168s-.443-8.432-2.816-19.006l7.512-2.07m-37 10.192l.797-.22l22.867-6.298c2.097 9.507 2.618 17.258 2.647 17.717M22.706 5.427l.583 1.26c1.837 3.966 3.287 8.211 4.432 12.344L5.5 25.151");
}
</style><rect class="mnedkcapm"/><path class="qgi4-e_vt"/>`,
		"fallback": "arcticons:fussballde",
	});
}

export default Component;
