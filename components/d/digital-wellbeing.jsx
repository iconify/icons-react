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
		"content": `<style>.aqsckn8mv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 18.248c-3.464-10.938-21.931 2.46 0 15.534m0-15.534c3.464-10.938 21.931 2.46 0 15.534");
}

.fh6e5ubtw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.105 40.226A21.5 21.5 0 1 1 20.637 2.765m5.983-.105a21.5 21.5 0 0 1 15.204 33.363");
}
</style><path class="fh6e5ubtw"/><path class="aqsckn8mv"/>`,
		"fallback": "arcticons:digital-wellbeing",
	});
}

export default Component;
