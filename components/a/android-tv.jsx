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
		"content": `<style>.e3komu32d {
  cx: 24px;
  cy: 31px;
  r: 9.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.g_5z26bkf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.937 24.481L24 23.85l-.937.631m7.456 7.456L31.15 31l-.631-.937m-7.456 7.456l.937.631l.937-.631m-7.456-7.456L16.85 31l.631.937");
}

.uenc7cc7l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.367 35.5H41.5a2 2 0 0 0 2-2v-24a2 2 0 0 0-2-2h-35a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h9.132");
}

.vs55iub2n {
  cx: 24px;
  cy: 31px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="uenc7cc7l"/><circle class="e3komu32d"/><circle class="vs55iub2n"/><path class="g_5z26bkf"/>`,
		"fallback": "arcticons:android-tv",
	});
}

export default Component;
