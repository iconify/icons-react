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
		"content": `<style>.gdpz_rbbn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.532 9.567h24.936a4 4 0 0 1 4 4V38.5a4 4 0 0 1-4 4H11.532a4 4 0 0 1-4-4V13.567a4 4 0 0 1 4-4M13.715 5.5v4.068M34.14 5.5v4.068M9.731 19.89h28.36");
}

.rb967xbml {
  d: path("M24.51 35.413c.554.83 1.522 1.382 3.043 1.382h.276a3.72 3.72 0 0 0 3.734-3.733v-3.733M17.33 27.135l2.8-1.54m0 0v11.2");
}

.u-n9bzbtt {
  cx: 27.829px;
  cy: 29.329px;
  r: 3.733px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="u-n9bzbtt"/><path class="rb967xbml"/></g><path class="gdpz_rbbn"/>`,
		"fallback": "arcticons:calendar-fossify-19",
	});
}

export default Component;
