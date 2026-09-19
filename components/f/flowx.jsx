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
		"content": `<style>.cw0u2587h {
  d: path("m24 4.5l-12.604 18c-4.901 7-.396 21 12.604 21s17.505-14 12.604-21z");
}

.ld_kvm2sf {
  d: path("m24 13.5l-7 9.997C13.097 29.072 18 36.5 24 36.5s11.002-7.287 7.002-13zm0 0l3-4.284");
}

.wzlnelb3n {
  d: path("M29.69 42.47c-6.041.486-13.372-5.64-14.054-13.974");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="cw0u2587h"/><path class="ld_kvm2sf"/><path class="wzlnelb3n"/></g>`,
		"fallback": "arcticons:flowx",
	});
}

export default Component;
