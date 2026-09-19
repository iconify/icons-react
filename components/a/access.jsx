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
		"content": `<style>.fd-k-sbvi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.587 24.834l-7.763 7.763l-.586 4.57l4.57-.585l7.764-7.764");
}

.g1je52bft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.762 19.468a7.79 7.79 0 0 0-15.58 0c0 3.305 2.067 6.113 4.973 7.244v13.142l2.817 3.646l2.818-3.646V26.712c2.905-1.131 4.972-3.939 4.972-7.244");
}

.o0ofsw4ai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.972 19.468a7.484 7.484 0 1 0-7.484-7.484");
}
</style><path class="o0ofsw4ai"/><path class="g1je52bft"/><path class="fd-k-sbvi"/>`,
		"fallback": "arcticons:access",
	});
}

export default Component;
