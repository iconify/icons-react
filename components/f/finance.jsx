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
		"content": `<style>.byx51ydes {
  d: path("m26.278 35.094l-8.514-7.255c-4.112 3.45-8.09 7.067-12.265 10.407l.001 2.24a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2V21.533s-11.027 9.18-16.222 13.56");
}

.vj_4sfbqi {
  d: path("M42.5 12.72L26.277 26.28l-8.514-7.254L5.5 29.433v4.086l12.263-10.406l8.514 7.253l16.225-13.56z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="byx51ydes"/><path class="vj_4sfbqi"/></g>`,
		"fallback": "arcticons:finance",
	});
}

export default Component;
