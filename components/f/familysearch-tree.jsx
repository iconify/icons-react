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
		"content": `<style>.bl79wh5kk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.95 20.8c-3.7 12 3.8 17.3 3.8 17.3h-3.4s-6.7-6.6-.4-17.3");
}

.ll0g54h-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4");
}

.lm5lq8bvs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.55 18.7h5.5v5.5h-5.5zm14.6-3.3h5.1v5.1h-5.1zm-6.7 1h4.3v4.3h-4.3zm2.9 6.7h5.4v5.4h-5.4zm7.8-.1h2.3v2.3h-2.3zm-15.8-9.5h2.9v2.9h-2.9zm5.1-3.6h4.3v4.3h-4.3z");
}

.zss9l_bxb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.55 28.5s-.7 2.3-2.9 3.3m-5.3-7.6s.4 1.9 2.7 3.5");
}
</style><path class="ll0g54h-q"/><path class="lm5lq8bvs"/><path class="bl79wh5kk"/><path class="zss9l_bxb"/>`,
		"fallback": "arcticons:familysearch-tree",
	});
}

export default Component;
