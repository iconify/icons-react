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
		"content": `<style>.pqe2kqbxm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.725 22.852l3.534 2.78l7.946-6.248l5.533 4.35l-7.946 6.248l11.248 8.843l-5.945 4.675L6.96 21.378L28.425 4.5l5.533 4.35l-15.519 12.202z");
}
</style><path class="pqe2kqbxm"/>`,
		"fallback": "arcticons:homepro-fittile",
	});
}

export default Component;
