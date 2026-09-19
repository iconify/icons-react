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
		"content": `<style>.jf19nrbny {
  cx: 17.359px;
  cy: 22.686px;
  r: 12.859px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.q0cbfy1cj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.236 25.82l15.445 11.867l-.641-6.429l10.46 6.915");
}
</style><path class="q0cbfy1cj"/><circle class="jf19nrbny"/>`,
		"fallback": "arcticons:hydro-quebec",
	});
}

export default Component;
