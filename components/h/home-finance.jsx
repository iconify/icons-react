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
		"content": `<style>.c2ibq-1sb {
  cx: 31.965px;
  cy: 13.279px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 9.872px;
  ry: 4.949px;
}

.fpqec_blb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.394 19.304c3.896 5.366 16.72 5.522 21.106.086");
}

.pczdsfo3m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 32.954c4.16 4.461 9.959 3.796 13.392 3.691M5.5 27.374c3.785 4.32 8.805 4.662 13.564 4.12m-.487-14.04c-15.152-3.178-17.022 10.534 0 8.954m2.817 9.894c3.953 4.1 17.297 5.02 21.106-.43m-21.106-5.837c2.961 5.45 16.717 5.376 21.106.43M21.394 24.67c6.18 6.479 17.5 4.262 21.106 0");
}

.pds8nqban {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.577 17.454v8.954");
}
</style><path class="pczdsfo3m"/><path class="fpqec_blb"/><ellipse class="c2ibq-1sb"/><path class="pds8nqban"/>`,
		"fallback": "arcticons:home-finance",
	});
}

export default Component;
