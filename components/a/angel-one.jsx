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
		"content": `<style>.iie_gqxfu {
  d: path("m15.457 41.446l3.357-5.815h-6.715zm6.715 0l3.357-5.815h-6.715zm6.715 0l3.357-5.815h-6.715z");
}

.iom7ulbas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.099 35.631l3.358-5.816H8.742zm6.715 0l3.358-5.816h-6.715zm6.715 0l3.358-5.816h-6.715zm-10.072-5.816L18.814 24h-6.715zm6.715 0L25.529 24h-6.715zM18.814 24l3.358-5.815h-6.715z");
}

.rl0yuaczt {
  d: path("m8.857 41.446l3.358-5.815H5.5z");
}

.ror_-y5_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.814 12.369l16.788 29.077H42.5L22.172 6.554z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="rl0yuaczt"/><path class="iie_gqxfu"/></g><path class="iom7ulbas"/><path class="ror_-y5_k"/>`,
		"fallback": "arcticons:angel-one",
	});
}

export default Component;
