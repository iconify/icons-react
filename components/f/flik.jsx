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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.j1vnjcbsv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.776 19.541v9.449m4.724-.014l-3.362-3.348l2.915-2.901M11.318 28.99v-7.795c0-.913.74-1.653 1.653-1.653h0c.814 0 1.322.24 1.67.691M8.5 22.73h6.142M8.5 25.13h6.142");
}

.lcxhuq6_e {
  cx: 28.871px;
  cy: 19.837px;
  r: 0.75px;
  fill: currentColor;
}

.lf5i7u4-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.509 22.73h2.362v6.26m2.362 0h-4.724m-3.544 0h-4.724m2.362 0v-9.449h-2.362");
}
</style><circle class="cpk0fnbgt"/><path class="j1vnjcbsv"/><circle class="lcxhuq6_e"/><path class="lf5i7u4-c"/>`,
		"fallback": "arcticons:flik",
	});
}

export default Component;
