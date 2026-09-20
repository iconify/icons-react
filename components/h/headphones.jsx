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
		"content": `<style>.n6yadbbqq {
  fill: currentColor;
  d: path("M9 21H5q-.825 0-1.412-.587T3 19v-7q0-1.875.713-3.512t1.924-2.85t2.85-1.925T12 3t3.513.713t2.85 1.924t1.925 2.85T21 12v7q0 .825-.587 1.413T19 21h-4v-8h4v-1q0-2.925-2.037-4.962T12 5T7.038 7.038T5 12v1h4z");
}
</style><path class="n6yadbbqq"/>`,
		"fallback": "material-symbols:headphones",
	});
}

export default Component;
