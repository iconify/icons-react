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
		"content": `<style>.lvftzfbax {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 15.331h6.858v24.415H5.5zm6.858-5.205h10.833v29.619H12.358zm11.147 1.285l10.363-3.157L42.5 36.587l-10.363 3.158z");
}
</style><path class="lvftzfbax"/>`,
		"fallback": "arcticons:bbc-bitesize",
	});
}

export default Component;
