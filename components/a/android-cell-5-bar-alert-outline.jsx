import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.entxu4p6i {
  fill: currentColor;
  d: path("M2 19v-4.712h1.692V19zm4.577 0v-6.577h1.692V19zm4.577 0V9.654h1.692V19zm9.826-.21q-.21-.21-.21-.52t.21-.521q.209-.21.52-.21t.52.21t.21.52t-.21.52q-.209.211-.52.211t-.52-.21m.02-2.251v-3.616h1v3.616zm-.692-4.999V5H22v6.389q-.125-.012-.244-.018t-.256-.006q-.313 0-.618.047t-.574.128M15.73 19V7.789h1.692v5.796q-.407.598-.607 1.294t-.2 1.418t.216 1.404t.58 1.299z");
}
</style><path class="entxu4p6i"/>`,
		"fallback": "material-symbols-light:android-cell-5-bar-alert-outline",
	});
}

export default Component;
