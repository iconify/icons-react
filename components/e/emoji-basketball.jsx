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
		"content": `<style>.iawqlibag {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.5 24c-.005 11.87 9.617 21.495 21.491 21.5S45.495 35.887 45.5 24.018V24c.005-11.87-9.617-21.495-21.491-21.5S2.505 12.113 2.5 23.982z");
}

.zg_k-zbhg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.235 40.081c-4.152-4.15-6.673-9.782-6.673-16.155c0-6.3 2.52-12.005 6.672-16.155M9.84 7.845c4.15 4.15 6.672 9.855 6.672 16.155s-2.52 12.005-6.672 16.155M2.5 24h43M24 2.509v42.982");
}
</style><path class="zg_k-zbhg"/><path class="iawqlibag"/>`,
		"fallback": "arcticons:emoji-basketball",
	});
}

export default Component;
