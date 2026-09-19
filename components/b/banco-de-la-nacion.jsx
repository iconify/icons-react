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
		"content": `<style>.ce9j0tbyn {
  d: path("M11.314 9.38c13.846-2.826 16.573.53 16.983 3.302c1.204 8.127-17.162 17.01-23.797 17.34c3.104-.628 16.33-10.677 15.155-16.614c-.62-3.132-2.835-3.741-8.341-4.028");
}

.ipbjcbc3d {
  d: path("M26.46 19.048c13.846-2.826 16.573.53 16.984 3.302c1.203 8.127-17.162 17.01-23.798 17.34c3.104-.628 16.33-10.678 15.155-16.614c-.62-3.132-2.835-3.741-8.34-4.028");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ce9j0tbyn"/><path class="ipbjcbc3d"/></g>`,
		"fallback": "arcticons:banco-de-la-nacion",
	});
}

export default Component;
