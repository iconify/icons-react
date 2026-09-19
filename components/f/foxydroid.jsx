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
		"content": `<style>.bhe964vyz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 16.17l-9.24 5.33l-9.24 5.34V5.5l9.24 5.33zm0 0l9.24-5.34l9.24-5.33v21.34l-9.24-5.34z");
}

.nyjz2da7l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.48 26.84L24 42.5V16.17l9.24 5.33zm-36.96 0l9.24-5.34L24 16.17V42.5z");
}
</style><path class="bhe964vyz"/><path class="nyjz2da7l"/>`,
		"fallback": "arcticons:foxydroid",
	});
}

export default Component;
