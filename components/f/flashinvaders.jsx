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
		"content": `<style>.d1o2debff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.578 32.482l.051-3.215h3.02l.072-9.42h3.092v-3.02h3.02l.072-3.164h3.308v3.02h6.113l-.072-3.092h3.38v3.02h3.02v3.02h3.235l.072 9.708h2.877v3.164h-6.185l-.035-6.22h-3.165v3.056h-9.42v3.092h6.185v-6.184h-6.185v3.164H17.87v-3.092h-2.984l-.05 6.146z");
}

.jc1oydeao {
  width: 39px;
  height: 31px;
  x: 4.5px;
  y: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.lj0gposru {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.157 19.811h3.056v3.092h-3.128zm9.329-.003h3.056V22.9h-3.128z");
}
</style><rect class="jc1oydeao"/><path class="d1o2debff"/><path class="lj0gposru"/>`,
		"fallback": "arcticons:flashinvaders",
	});
}

export default Component;
