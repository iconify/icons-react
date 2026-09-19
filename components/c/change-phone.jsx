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
		"content": `<style>.b6b6c8rbq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.37 33.558v6.972a2.965 2.965 0 0 1-2.973 2.97H11.488a2.965 2.965 0 0 1-2.973-2.97V14.232a2.965 2.965 0 0 1 2.973-2.97h12.91a2.965 2.965 0 0 1 2.973 2.97v6.974");
}

.noxagh9wh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.83 11.166V7.47a2.965 2.965 0 0 1 2.973-2.97h12.709a2.965 2.965 0 0 1 2.973 2.97v26.298a2.965 2.965 0 0 1-2.973 2.97h-9.046m-4.905-3.454l-6.202-6.02l6.202-6.018");
}

.ws1vmrzli {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.369 27.274c9.037.536 17.56.542 18.803-10.362");
}
</style><path class="b6b6c8rbq"/><path class="noxagh9wh"/><path class="ws1vmrzli"/>`,
		"fallback": "arcticons:change-phone",
	});
}

export default Component;
