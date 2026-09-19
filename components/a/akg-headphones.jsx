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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.qn53oqbwr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.271 22.421c0-1.703-1.367-3.083-3.053-3.083s-3.053 1.38-3.053 3.083v3.141c0 1.703 1.367 3.084 3.053 3.084s3.053-1.38 3.053-3.084h-3.053m-16.394.001h-4.083m-1.012 3.083l3.053-9.308l3.053 9.308m3.688-9.292v9.308m0-3.243l4.954-6.035m0 9.278l-3.79-4.654");
}
</style><rect class="j3s9ivbxi"/><path class="qn53oqbwr"/>`,
		"fallback": "arcticons:akg-headphones",
	});
}

export default Component;
