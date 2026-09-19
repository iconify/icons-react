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
		"content": `<style>.zi77s4uds {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.51 10.2h9l3.6 7.52c1.69 3.36 3.88 3.48 6.17 3.48h13.97a1.25 1.25 0 0 1 1.25 1.26v3.05a1.25 1.25 0 0 1-1.25 1.26h-1.77v5.37h-2.7v-2.59h-2.66v5.52h-2.86v-8.3h-3.88c-2.32 0-4.53.11-6.23 3.51l-3.6 7.52h-9c-1.49 0-2-.93-2.35-2.35l-1.85-8L4.5 24l.8-3.48l1.85-8c.33-1.42.86-2.35 2.36-2.35Zm0 0");
}
</style><path class="zi77s4uds"/>`,
		"fallback": "arcticons:authpass",
	});
}

export default Component;
