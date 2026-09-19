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
		"content": `<style>.i_dcz75ne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.85 33.744L24 25.176l4.15 8.568c1.458 3.007 5.741 3.007 7.2 0l7.749-16a4 4 0 0 0-7.2-3.487l-4.15 8.568l-4.15-8.568a4 4 0 0 0-7.198 0l-4.15 8.568");
}

.zg388nf3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.901 17.744l7.75 16a4 4 0 0 0 7.199-3.488l-7.75-16a4 4 0 0 0-7.199 3.488");
}
</style><path class="zg388nf3w"/><path class="i_dcz75ne"/>`,
		"fallback": "arcticons:instawork",
	});
}

export default Component;
